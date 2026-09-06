import { useCallback, useRef, useState } from "react";

const AI_API_URL = process.env.REACT_APP_AI_API_URL || "http://localhost:8000";

/**
 * Splits an SSE byte stream into complete "data: ...\n\n" frames, calling `onEvent` with the
 * JSON payload of each. Returns whatever incomplete tail should be prepended to the next chunk.
 * Ported from rockets-and-space's apps/web/src/hooks/use-chat-stream.ts, which hand-parses the
 * stream (no SSE client library) since the wire format is a handful of lines -- see that repo's
 * apps/api/app/api/routes/chat.py for the producing side.
 */
function consumeSseFrames(buffer, onEvent) {
  const frames = buffer.split("\n\n");
  const remainder = frames.pop() ?? "";

  for (const frame of frames) {
    const dataLines = frame
      .split("\n")
      .filter((line) => line.startsWith("data:"))
      .map((line) => line.slice(5).trim());
    if (dataLines.length > 0) {
      onEvent(dataLines.join("\n"));
    }
  }

  return remainder;
}

function makeSessionId() {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);
}

/**
 * Streams chat with the rockets-and-space AI agent (POST /api/chat/stream).
 * Note: this talks to the API directly via fetch/ReadableStream rather than the axios
 * pattern used elsewhere in src/services/ -- axios doesn't stream response bodies in the
 * browser the way SSE token-by-token rendering needs.
 */
export function useAiChat() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const sessionId = useRef(makeSessionId());

  const sendMessage = useCallback(
    async (text) => {
      const history = messages.map((m) => ({ role: m.role, content: m.content }));

      setMessages((prev) => [...prev, { role: "user", content: text }, { role: "assistant", content: "" }]);
      setIsStreaming(true);
      setStatus({ phase: "thinking", message: "Thinking..." });

      const appendToken = (delta) => {
        setMessages((prev) => {
          const next = [...prev];
          const lastIndex = next.length - 1;
          next[lastIndex] = { ...next[lastIndex], content: next[lastIndex].content + delta };
          return next;
        });
      };

      try {
        const response = await fetch(`${AI_API_URL}/api/chat/stream`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, session_id: sessionId.current, history }),
        });

        if (!response.ok || !response.body) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          buffer = consumeSseFrames(buffer, (raw) => {
            let event;
            try {
              event = JSON.parse(raw);
            } catch {
              return;
            }

            switch (event.type) {
              case "status":
                setStatus({ phase: event.phase || "thinking", message: event.message || "", tool: event.tool });
                break;
              case "token":
                appendToken(event.text || "");
                break;
              case "error":
                setStatus({ phase: "error", message: event.message || "Something went wrong" });
                break;
              default:
                break;
            }
          });
        }
      } catch (err) {
        setStatus({ phase: "error", message: err instanceof Error ? err.message : "Connection failed" });
      } finally {
        setIsStreaming(false);
        setStatus((prev) => (prev && prev.phase === "error" ? prev : null));
      }
    },
    [messages]
  );

  return { messages, status, isStreaming, sendMessage };
}
