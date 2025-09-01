# Edgecases

**Edgecases** is a modern, full-stack web application designed to help software engineers and developers prepare for technical interviews and improve their problem-solving skills. It provides a community-curated platform to share and discover edge cases for common algorithmic problems.

The core idea is to move beyond the "happy path" and build a rich database of the tricky inputs that often break initial solutions, such as empty arrays, negative numbers, zero values, and data type overflows.

## Core Features

- **User Authentication**: Secure sign-up and sign-in functionality handled by Clerk.
- **Problem Submission**: Authenticated users can submit new algorithmic problems, including a title and a detailed description.
- **Edge Case Contribution**: Users can add edge cases to any existing problem, providing a description and a concrete test case.
- **GraphQL API**: A robust, type-safe, and secure GraphQL API for all data operations.
- **(Future) AI-Powered Suggestions**: The application is designed to eventually integrate with a Large Language Model (LLM) to automatically suggest potential edge cases when a new problem is submitted.

## Tech Stack

This project is built with a modern, type-safe, and scalable technology stack:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Database**: PostgreSQL managed by [Prisma](https://www.prisma.io/)
- **API Layer**: [GraphQL](https://graphql.org/) powered by [Pothos](https://pothos-graphql.dev/) and [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)
- **Authentication**: [Clerk](https://clerk.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm or your package manager of choice
- A running PostgreSQL database

### Installation

1.  **Clone the repository**

    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install NPM packages**

    ```sh
    npm install
    ```

3.  **Set up your environment variables**
    Create a file named `.env` in the root of your project and add the following variables.

    ```env
    # Your PostgreSQL database connection string
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

    # Get these from your Clerk dashboard
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    ```

4.  **Run database migrations**
    This will sync your Prisma schema with your database, creating the necessary tables.

    ```sh
    npx prisma migrate dev
    ```

5.  **Run the development server**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## GraphQL API

The GraphQL endpoint is available at `http://localhost:3000/api/graphql`. You can use a tool like Postman or a browser extension to explore the schema and interact with the API.

### Key Operations

- **Queries**:
  - `problems`: Fetches a paginated list of all problems.
  - `problem(id: ...)`: Fetches a single problem by its ID.
  - `me`: Fetches the profile of the currently authenticated user.
- **Mutations**:
  - `createProblem(...)`: Creates a new problem.
  - `updateProblem(...)`: Updates an existing problem (author only).
  - `deleteProblem(...)`: Deletes a problem (author only).
  - `createEdgeCase(...)`: Adds a new edge case to a problem.
  - `updateEdgeCase(...)`: Updates an edge case (author only).
  - `deleteEdgeCase(...)`: Deletes an edge case (author only).
