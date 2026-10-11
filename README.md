# Portfolio

My portfolio site. It collects my projects in medical diagnostics, statistics,
and AI, each with a live demo or a linked repo.

Live: https://anurag-nepal-portfolio.vercel.app/

## What's on it

- **AI and statistics:** LLM annotator reliability, RAG evaluation lab,
  synthetic data tradeoffs, double machine learning for causal effects. Each
  has a live interactive dashboard embedded on the site and a linked GitHub
  repo with the full pipeline.
- **Medical imaging:** malaria cell classifier, COVID CT infection map, ECG
  arrhythmia classifier. Live demos.
- **Prediction models:** stroke prediction, Premier League match prediction,
  NBA schedule analysis, housing price model, influenza deaths forecast.
  Live demos.
- **Research:** multi-modal feature selection from my M.S. thesis, with a live
  results site and the repo.
- **Chat assistant:** a small chat widget that answers questions about me and
  my work, backed by a serverless endpoint.
- Sections for projects, experience, about, and contact; contact form and a
  resume download. Dark mode by default.

## How it is built

React + TypeScript + Vite with Tailwind. The chat widget calls a small
serverless API under `backend/`; the contact form goes through Formspree. The
site is deployed on Vercel.

## Run locally

```bash
cd frontend
npm install
npm run dev
```

That starts the dev server (the chat widget in local dev talks to the
deployed backend).
