# Mini Express — Custom Node.js HTTP Framework

<p align="center">
  <img src="/banner.png" alt="Node HTTP Framework Banner" width="100%" />
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTTP-Server-4A90E2?style=for-the-badge" alt="HTTP Server" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

<p align="center">
  A lightweight HTTP framework built from scratch using vanilla Node.js.
  <br />
  Inspired by Express.js — focused on understanding how web frameworks work internally.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#getting-started">Getting Started</a>
</p>

---

## Overview

**Mini Express** is a learning project that explores the fundamentals of building a web framework with native Node.js modules instead of relying on an external framework such as Express.js.

The project implements a custom HTTP server, request processing, route registration, middleware execution, and response handling. It also demonstrates how these components can be organized into a modular backend architecture.

## Features

- **Custom HTTP server** — built with Node.js's native `http` module.
- **Application class** — centralizes server initialization, middleware registration, and router integration.
- **Routing system** — registers route handlers by request path and HTTP method.
- **Middleware architecture** — allows request processing logic to be separated into reusable functions.
- **Request parsing** — extracts URL paths and query parameters.
- **JSON responses** — provides a middleware for setting JSON response headers and sending serialized data.
- **404 handling** — returns a `404 Not Found` response when no registered route matches the request.
- **MongoDB integration** — uses Mongoose to connect the application to a MongoDB database.
- **Environment configuration** — uses `dotenv` to load environment variables.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| Node.js | Server-side JavaScript runtime |
| JavaScript | Application and framework logic |
| Native HTTP module | HTTP server implementation |
| Node.js Events | Route handler registration and dispatch |
| MongoDB | Database |
| Mongoose | MongoDB integration |
| dotenv | Environment variable management |
| Nodemon | Automatic server restart during development |

## Project Structure

```text
node-http-framework-vanila/
├── framework/
│   ├── Application.js
│   └── middleware/
│       ├── paresJson.js
│       └── parseUrl.js
├── src/
│   └── routers/
│       └── user-router.js
├── .env
├── .gitignore
├── compose.yml
├── framework.js
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) or a compatible MongoDB instance

### Installation

Clone the repository:

```bash
git clone https://github.com/prestige-savelev/node-http-framework-vanila.git
```

Navigate to the project directory:

```bash
cd node-http-framework-vanila
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/your_database
```

Make sure MongoDB is running and the connection settings match your local environment.

**Security:** Never commit real credentials, database passwords, or other secrets to your repository.

### Run the Server

Start the application in development mode:

```bash
npm start
```

The server uses port `5000` by default unless another port is configured through the environment.

## Core Architecture

### Application

The `Application` class is the central component of the framework. It creates the HTTP server, stores registered middleware, and connects route handlers to incoming requests.

### Middleware

Middleware functions process incoming requests and can prepare request data or configure response behavior before route handlers execute.

The project includes middleware for URL parsing and JSON response handling.

### Routing

Routers organize endpoint handlers by path and HTTP method. The application registers these handlers and dispatches matching requests using Node.js's event system.

### Error Handling

The framework includes a basic `404 Not Found` response for requests that do not match a registered route.

## Project Goals

This project was created to:

- Understand how HTTP servers work under the hood.
- Explore the internal principles behind frameworks such as Express.js.
- Practice modular backend architecture in Node.js.
- Understand middleware composition and request lifecycle.
- Learn how routing and HTTP response handling can be implemented from scratch.
- Build a foundation for developing more advanced backend applications.

## Future Improvements

Potential areas for further development:

- [ ] Add centralized error-handling middleware.
- [ ] Improve request body parsing and validation.
- [ ] Add route parameters and more flexible routing.
- [ ] Introduce a standardized response API.
- [ ] Add automated tests.
- [ ] Improve configuration and database connection handling.

## Author

**Danil Savelev**

GitHub: [@prestige-savelev](https://github.com/prestige-savelev)

---

<p align="center">
  Built with Node.js to explore the fundamentals of backend development.
</p>
