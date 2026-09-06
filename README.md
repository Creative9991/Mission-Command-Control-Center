This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Mission Command Control  Application

As a space exploration enthusiat, I have created a small app that gives you more insight in to the space agencies around the world and other outer space related information. 

Special thanks to:

Nasa Open Public APIs
Isro/api github
International space station current location tracker (Open Notify APIS)


## Technologies

Reactjs, Nodejs, Expressjs, AWS Dynamodb,jspdf, html2canvas etc


## AI Assistant

The app now includes an AI Assistant page (click the robot icon in the nav, or go to
`/ai-assistant`) — a chat interface for asking about rockets, space missions, and
uploaded documents. It's powered by a separate project,
[rockets-and-space](https://github.com/Creative9991/rockets-and-space) (Next.js +
FastAPI/LangGraph agent backend), which this app talks to directly over HTTP/SSE —
Mission Control's React frontend is just a second client of that API, same as
rockets-and-space's own frontend.

**To use it locally:**

1. Clone and run `rockets-and-space` per its own README (`docker compose up --build`,
   with `ANTHROPIC_API_KEY` set in its `.env`). It serves its API at
   `http://localhost:8000` by default.
2. In this repo, copy `.env.example` to `.env` (defaults already point at
   `http://localhost:8000` — only change `REACT_APP_AI_API_URL` if rockets-and-space
   is running somewhere else).
3. `npm start` as usual — the AI Assistant page will stream chat responses once both
   apps are running.

Note: as of now, rockets-and-space's API has no authentication of its own — the AI
Assistant page here is only gated by this app's existing login, not by the backend
itself. Don't point `REACT_APP_AI_API_URL` at a publicly deployed instance without
adding real auth + rate limiting first.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Sequence Diagram for Nasa APIs

<img width="1027" height="318" alt="image" src="https://github.com/user-attachments/assets/5fcd62fd-26ce-4259-81c6-59f74d0866fc" />



