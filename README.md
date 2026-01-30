# Microservice Demo (Node.js + TypeScript)

A clean and minimal microservice built using **Node.js**, **TypeScript**, and **Express**.  
This demo showcases production-style project structure, TypeScript setup, and simple API endpoints.

---

## 🚀 Features

- Built with **Node.js + TypeScript**
- Clean folder structure (`src/`)
- REST API endpoints
- JSON request/response handling
- Ready for deployment (build → dist)
- Includes `tsconfig.json`, scripts, and `.gitignore`

---

## 📁 Project Structure

```
microservice-demo/
  src/
    index.ts        # Entry point
  package.json
  tsconfig.json
  .gitignore
```

---

## 🛠 Installation

```
npm install
```

---

## ▶️ Run in Development

```
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### **GET /health**
Health check endpoint.

Response:
```json
{ "status": "ok" }
```

---

### **POST /echo**
Echoes back the JSON body sent in the request.

Request:
```json
{ "name": "Faraz" }
```

Response:
```json
{
  "message": "Received your data",
  "data": { "name": "Faraz" }
}
```

---

## 🔧 Build for Production

```
npm run build
npm start
```

Build output is placed in the `dist/` directory.

---

## 🎯 Purpose of this Project

This repository is part of my freelance engineering portfolio, demonstrating:

- API development using Node.js
- TypeScript setup for backend services
- Clean service structure
- Use of health checks and request handling

---

## 📬 Contact

- **Email:** faraz.munavarhussain@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/faraz-munavar-hussain-bb164137
