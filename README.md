# Vite React Router DOM Example

## Description

This project is a comprehensive example of implementing React Router DOM for navigation and routing in a React application. The project demonstrates various React Router concepts including basic routing, nested routes, dynamic routing with route parameters, loaders for data fetching, error handling with error boundaries, and programmatic navigation using hooks.

It serves as a practical reference and learning resource for building modern React applications with client-side routing.

---

## JSON Server Setup (Fake API)

This project uses JSON Server to create a fake REST API for development and testing purposes.

### Quick Setup Commands

```bash
# Check if JSON Server is installed
json-server --version

# Install globally if needed
npm install -g json-server

# Navigate to assets folder
cd src/assets

# Start the fake API server
npx json-server --watch data.json --port 8080

# Stop the server
# Press Ctrl + C
```

### API Endpoints

Once the server is running, you can access:

- API Root: http://localhost:8080/
- Jobs Data: http://localhost:8080/jobs
- Web Interface: http://localhost:8080/ (JSON Server provides a web interface)

### Usage in React Components

```js
/*
 * Loader function to fetch jobs data from json-server fake API.
 *
 * Reference: https://www.npmjs.com/package/json-server
 *
 * This setup is useful for development and testing with mock data.
 */
export const jobsLoader = async () => {
  const response = await fetch("http://localhost:8080/jobs");
  if (!response.ok) {
    throw new Error("Failed to fetch jobs data");
  }
  return response.json();
};
```

### Notes

- JSON Server automatically creates RESTful routes based on your JSON structure
- The server must be running alongside your React development server
- Data changes are persisted to the JSON file during development
- Perfect for prototyping and testing without a real backend

---

## **Preview**

![Preview vite-react-router-dom-example](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExczh3YTY4djdnZG4zMDdnd2xqNGE1OTNneHE1ZXRmZmtjbjhtNW9ncyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JUnGIr0vpJtXBNpLQC/giphy.gif)

---

## Features Implemented

- Basic Routing: Setting up routes and navigation between pages
- Nested Routes: Creating layouts with child routes
- Dynamic Routing: Route parameters and dynamic route matching
- Data Loading: Using React Router loaders for data fetching
- Error Handling: Error boundaries and error elements for route-level error handling
- Programmatic Navigation: Using useNavigate hook for navigation
- Active Link Styling: Difference between Link and NavLink components
- 404 Page: Custom not found page handling
- JSON Server Integration: Mock API setup for data fetching examples

---

## Technologies Used

- React 19: Latest React version for building user interfaces
- React Router DOM 6: Modern routing library for React applications
- Vite: Fast build tool and development server
- JSON Server: Mock REST API for development and testing

---

## Requirements

Make sure the following software is installed on your machine:

- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Getting Started

Follow these steps to run the project locally:

1. **Clone the Repository**

   ```bash
   git clone <REPOSITORY-URL>
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd <project-folder-name>
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

5. **Access the App**

   ```
   http://localhost:<PORT>
   ```

---

## Available npm Scripts

- `npm install`: Installs all dependencies.
- `npm run dev`: Starts the development server.

---

## Notes

- Replace `<REPOSITORY-URL>` with the actual GitHub repository URL.
- Replace `<project-folder-name>` with your project’s folder name after cloning.
- If you run into issues, double-check that all dependencies are installed correctly and that Node.js is set up properly.

---

## Project Structure

```
src/
├── assets/          # Static assets and JSON data files
├── components/      # Reusable components
├── layout/          # Layout-related components
├── pages/           # Page components for different routes
└── main.jsx         # Application entry point
```

## Learning Resources

This project was built following the React Router tutorial:

- Source: [React Router Complete Tutorial | React Routing For Beginners | React Router DOM Tutorial](https://www.youtube.com/watch?v=943D7U74_sQ)
- Topics Covered:
  - Basic routing
  - Nested routes
  - Dynamic routing
  - Loaders
  - Error handling
  - Navigation hooks
