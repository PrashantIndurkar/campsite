# Running Campsite Locally

This guide explains how to start and manage the Campsite application in your local development environment.

## 🚀 The One-Command Run

Since the project uses **Overmind**, you can start the entire stack (API, Web Frontend, Redis, Sync Server, etc.) with a single command from the project root:

```bash
script/dev
```

This script spins up all components defined in the `Procfile` concurrently.

---

## 🛠️ Prerequisites

Before running the command, ensure your background databases and hosts mapping are active:

### 1. Host Name Mapping (`/etc/hosts`)
Ensure the following line exists in your `/etc/hosts` file (this allows Next.js SSR and API calls to route correctly):
```text
127.0.0.1 app.campsite.test api.campsite.test admin.campsite.test auth.campsite.test
```

### 2. MySQL Server
Make sure your local MySQL instance is running:
```bash
brew services start mysql@8.0
```

### 3. Docker (for Elasticsearch)
Ensure Docker Desktop is open and running on your Mac. The `script/dev` command will automatically start the `elasticsearch` container.

---

## 🧭 Services Started under `script/dev`

When you run `script/dev`, the following processes are managed and run in parallel:

| Process | Service | Port / Domain |
| :--- | :--- | :--- |
| **`web`** | Next.js Frontend | `http://app.campsite.test:3000` |
| **`api-web`** | Rails API | `http://api.campsite.test:3001` |
| **`sync-server`** | Realtime Sync Server | Port `9000` |
| **`html-to-image`** | Headless Chrome Screenshot Service | Port `9222` |
| **`styled-text-server`** | Styled Text Renderer | Port `3002` |
| **`redis`** | In-memory Cache & Queue | Port `6379` |
| **`elasticsearch`** | Search Engine | Port `9200` (Docker Container) |
| **`api-worker`** | Sidekiq Background Jobs | Worker |

---

## 🔍 Managing Running Services

Overmind runs inside a multiplexed terminal. You can connect to specific services to view their logs or debug:

- **Connect to the Overmind session dashboard:**
  ```bash
  overmind connect
  ```
- **Connect to a specific service's logs (e.g., `web` or `api-web`):**
  ```bash
  overmind connect web
  overmind connect api-web
  ```
- **Exit/Quit everything:**
  Press `Ctrl + C` in the terminal where you ran `script/dev`.

---

## ✉️ Checking Outgoing Emails
All emails sent in development (e.g., sign-up confirmations, invites, notifications) are intercepted and displayed in a local web interface:
- **Letter Opener Web UI:** `http://api.campsite.test:3001/preview-emails`
