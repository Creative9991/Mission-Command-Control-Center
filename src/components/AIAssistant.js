import React, { useState } from "react";
import { Card, List, Avatar, Input, Button, Spin } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faUserAstronaut, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useAiChat } from "../hooks/useAiChat";
import "../styles/aiAssistant.css";

const { TextArea } = Input;

/**
 * Chat UI for the rockets-and-space AI research assistant, embedded as a Mission Control
 * feature. Talks directly to rockets-and-space's FastAPI service (see useAiChat) -- this
 * page assumes that service is reachable at REACT_APP_AI_API_URL and running (e.g. via
 * `docker compose up` in the rockets-and-space repo).
 */
function AIAssistant() {
  const { messages, status, isStreaming, sendMessage } = useAiChat();
  const [draft, setDraft] = useState("");

  const handleSend = () => {
    const text = draft.trim();
    if (!text || isStreaming) return;
    setDraft("");
    sendMessage(text);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="ai-assistant">
      <Card title="AI Assistant" bordered={false}>
        <div className="ai-assistant-thread">
          <List
            dataSource={messages}
            renderItem={(message, index) => (
              <div key={index} className={`ai-assistant-message ${message.role}`}>
                <Avatar icon={<FontAwesomeIcon icon={message.role === "user" ? faUserAstronaut : faRobot} />} />
                <div className="ai-assistant-bubble">{message.content || (isStreaming && index === messages.length - 1 ? "..." : "")}</div>
              </div>
            )}
          />
        </div>

        {status && (
          <div className={`ai-assistant-status ${status.phase === "error" ? "error" : ""}`}>
            {status.phase !== "error" && <Spin size="small" style={{ marginRight: 8 }} />}
            {status.message}
          </div>
        )}

        <div className="ai-assistant-input">
          <TextArea
            rows={2}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about rockets, space missions, or upload a document to reference..."
            disabled={isStreaming}
          />
          <Button type="primary" onClick={handleSend} disabled={isStreaming || !draft.trim()}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default AIAssistant;
