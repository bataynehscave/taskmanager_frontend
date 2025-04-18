# Task Manager Frontend (ReactJS)

This is the frontend for the Task Manager project built with ReactJS. It allows users to register, log in, and manage tasks via a clean and modern interface.

## Features

- JWT-based authentication with login and registration
- Dashboard to view tasks
- CRUD operations on tasks (Add, Edit, Delete, Mark as Done)
- Client-side validation and error handling
- styling with vanilla CSS
- Axios for API requests

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Update the API URL in `src/api.js` if your backend runs on a different port or host.

## Project Structure

- `src/pages`: Page components like Login, Register, Dashboard
- `src/components`: Reusable components like TaskForm, TaskItem, etc.
- `src/api.js`: Axios instance for communicating with backend
- `src/index.css`: Main styles

## Notes

Ensure the backend Django server is running and accessible at the URL configured in `api.js`.