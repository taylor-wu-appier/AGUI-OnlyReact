# Agentic UI Example (Vite + React + CopilotKit)

This project demonstrates an **Agentic UI** application built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [CopilotKit](https://docs.copilotkit.ai/). It showcases how to integrate AI agents into a frontend application to drive dynamic UI updates.

## Features

-   **CopilotKit Integration**: Seamless connection to an AI agent runtime.
-   **Dynamic UI Components**:
    -   **Proverbs Card**: A fully interactive component to manage a list of proverbs (add, edit, delete) with user interaction tracking.
    -   **Weather Card**: A dynamic weather display where properties like location and theme color can be controlled by the agent.
-   **Custom Backend Runtime**: A Node.js server (`server.ts`) that handles CopilotKit requests and connects to an external agent service.
-   **Modern Stack**: Built with TypeScript, Tailwind CSS, and Vite for a fast development experience.

## Prerequisites

-   Node.js (v18 or later recommended)
-   pnpm (preferred) or npm/yarn

## Getting Started

1.  **Install Dependencies**

    ```bash
    pnpm install
    ```

2.  **Environment Setup**

    Ensure you have any necessary environment variables set up. The server expects an agent endpoint running at `http://localhost:8778/api/agentic_ux` (configurable in `server.ts`).

3.  **Run the Application**

    To start both the frontend Vite server and the backend Copilot runtime server concurrently:

    ```bash
    pnpm dev
    ```

    -   **Frontend**: `http://localhost:5173`
    -   **Backend**: `http://localhost:4000`

    *Note: The `dev` script runs `vite && server.ts`. If you need to run them separately:*

    -   Frontend: `pnpm vite`
    -   Backend: `pnpm server`

## Project Structure

-   **`src/App.tsx`**: Main entry point wrapping the app with `<CopilotKit>`.
-   **`server.ts`**: Node.js server handling the Copilot Runtime and proxying requests to the AI agent.
-   **`src/components/`**:
    -   `proverbs.tsx`: Interactive proverbs management component.
    -   `weather.tsx`: Agent-controlled weather display component.
-   **`src/page.tsx`**: (Assumed) The main page layout containing the components.

## Tech Stack

-   **Frontend**: React, TypeScript, Vite, Tailwind CSS
-   **AI/Agent**: CopilotKit (@copilotkit/react-core, @copilotkit/runtime)
-   **Server**: Node.js (http), tsx

## Learn More

-   [CopilotKit Documentation](https://docs.copilotkit.ai/)
-   [Vite Documentation](https://vitejs.dev/)
-   [React Documentation](https://react.dev/)
