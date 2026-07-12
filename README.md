# AI Investment Research Agent

> An AI-powered investment research platform that analyzes publicly listed companies and generates an explainable investment recommendation using Large Language Models.

---

# Overview

The AI Investment Research Agent enables users to enter the name of a public company and receive an AI-generated investment report within seconds.

The application performs qualitative investment research using a Large Language Model and provides:

- Company Overview
- Financial Health
- Growth Potential
- Competitive Advantages
- Major Risks
- Investment Recommendation (Invest / Hold / Pass)
- Reasoning behind the recommendation
- Confidence Score

The goal of the project is not only to provide a recommendation, but also to explain *why* that recommendation was made.

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js

## AI

- LangGraph.js
- OpenRouter API
- Google Gemini 2.5 Flash

---

# Project Structure

```
investment-ai
│
├── src
│   ├── components
│   │      Hero.tsx
│   │      Navbar.tsx
│   │
│   ├── pages
│   │      Home.tsx
│   │
│   └── services
│          api.ts
│
├── server
│   ├── config
│   │      gemini.js
│   │
│   ├── graphs
│   │      investmentGraph.js
│   │
│   ├── prompts
│   │      investmentPrompt.js
│   │
│   ├── routes
│   │      analyze.js
│   │
│   ├── services
│   │      llm.js
│   │
│   └── server.js
│
└── README.md
```

---

# Features

✔ AI-powered investment research

✔ Company analysis

✔ Financial assessment

✔ Growth evaluation

✔ Competitive advantage analysis

✔ Risk assessment

✔ Investment recommendation

✔ Confidence score

✔ Modern responsive UI

✔ REST API architecture

---

# How to Run

## 1. Clone Repository

```bash
git clone <repository-url>
cd investment-ai
```

---

## 2. Install Frontend Dependencies

```bash
npm install
```

---

## 3. Install Backend Dependencies

```bash
cd server
npm install
```

---

## 4. Create Environment File

Inside the **server** folder create:

```
.env
```

Add:

```env
OPENROUTER_API_KEY=your_api_key_here
```

---

## 5. Start Backend

```bash
cd server
npm run dev
```

Server runs at

```
http://localhost:5000
```

---

## 6. Start Frontend

Open another terminal

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# API

## POST

```
POST /analyze
```

Request

```json
{
  "company": "Tesla"
}
```

Response

```json
{
  "success": true,
  "company": "Tesla",
  "analysis": {
    "overview": "...",
    "financialHealth": "...",
    "growthPotential": "...",
    "competitiveAdvantages": "...",
    "majorRisks": "...",
    "recommendation": "Hold",
    "reason": "...",
    "confidence": "80%"
  }
}
```

---

# How It Works

The application follows a simple AI pipeline.

```
User

↓

React Frontend

↓

Express Backend

↓

LangGraph Workflow

↓

Gemini (OpenRouter)

↓

Structured JSON Response

↓

Frontend UI
```

### Step 1

The user enters a company name.

Example:

```
Tesla
```

---

### Step 2

The React frontend sends a POST request.

```
POST /analyze
```

---

### Step 3

The Express server receives the request.

---

### Step 4

LangGraph orchestrates the AI workflow.

---

### Step 5

The investment prompt instructs Gemini to analyze the company and return structured JSON.

---

### Step 6

Gemini generates the investment report.

---

### Step 7

The backend parses the JSON response.

---

### Step 8

The frontend displays:

- Recommendation
- Confidence
- Financial Analysis
- Risks
- Reasoning

---

# Architecture

```
                 +-------------------+
                 |   React Frontend  |
                 +---------+---------+
                           |
                           |
                    Axios HTTP Request
                           |
                           |
                 +---------v---------+
                 | Express Backend   |
                 +---------+---------+
                           |
                    LangGraph Workflow
                           |
                 +---------v---------+
                 | Google Gemini     |
                 | via OpenRouter    |
                 +---------+---------+
                           |
                     Structured JSON
                           |
                 +---------v---------+
                 | React UI          |
                 +-------------------+
```

---

# Prompt Engineering

The application uses a custom investment analysis prompt that instructs the LLM to generate responses in a structured JSON format.

The prompt includes:

- Company Overview
- Financial Health
- Growth Potential
- Competitive Advantages
- Major Risks
- Recommendation
- Reason
- Confidence Score

Returning JSON instead of plain text simplifies parsing and improves frontend integration.

---

# Key Decisions

### Why React?

React enables reusable UI components and provides an interactive user experience.

---

### Why Express?

Express offers a lightweight REST API suitable for AI integrations.

---

### Why LangGraph?

LangGraph allows modular orchestration of AI workflows and supports future expansion into multi-agent systems.

---

### Why Gemini 2.5 Flash?

Gemini Flash provides:

- Fast inference
- High-quality reasoning
- Low latency
- Cost efficiency

---

### Why OpenRouter?

OpenRouter provides a unified interface for accessing multiple LLM providers without changing backend logic.

---

# Trade-offs

Current limitations include:

- Relies entirely on LLM knowledge without live market data.
- No stock price visualization.
- No historical financial charts.
- No authentication.
- No persistent storage.

These choices kept the project focused on demonstrating AI workflow, prompt engineering, and full-stack integration.

---

# Example Runs

## Tesla

Recommendation

```
Hold
```

Confidence

```
80%
```

Reason

Tesla has strong long-term growth potential and technological leadership but faces increasing competition and valuation risks.

---

## Apple

Recommendation

```
Invest
```

Confidence

```
88%
```

Reason

Strong cash flow, brand loyalty, recurring revenue, and consistent profitability.

---

## Netflix

Recommendation

```
Hold
```

Confidence

```
76%
```

Reason

Strong subscriber base but increasing competition in streaming markets.

---

# Future Improvements

Given additional development time, I would implement:

- Live stock market data integration
- Yahoo Finance / Alpha Vantage APIs
- Real-time news sentiment analysis
- Financial ratio calculations
- Interactive price charts
- PDF investment report generation
- User authentication
- Search history
- Portfolio tracking
- Multi-agent architecture
- RAG with SEC filings and annual reports
- Deployment on Vercel and Render
- Docker containerization
- Unit and integration testing

---

# Challenges Faced

During development I encountered several issues:

- OpenRouter token limit configuration
- JSON parsing of LLM responses
- Frontend-backend response mismatch
- CORS configuration
- API integration debugging
- Prompt engineering for structured outputs

These were resolved through iterative debugging and prompt refinement.

---

# AI Usage

This project was developed using AI-assisted software development.

AI tools were used for:

- Prompt engineering
- Debugging
- LangGraph integration
- API troubleshooting
- UI refinement
- Code optimization

All generated code was reviewed, modified, tested, and integrated manually.

---

# LLM Chat Transcript

As required by the assignment, the development process involved extensive interaction with Large Language Models for:

- Architecture planning
- Backend development
- LangGraph workflow design
- Prompt engineering
- React UI development
- Debugging
- API integration
- JSON response handling

The complete development conversation transcripts are included separately as part of the submission.

---

# Author

**Ritika**

B.Tech Computer Science Engineering

AI Product Development Engineer Internship Assignment

2026
