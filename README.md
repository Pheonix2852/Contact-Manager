# Contact Manager App

A simple yet powerful Contact Manager application built with React. This app allows users to manage their contacts, including adding, viewing, and deleting them. The project demonstrates the use of modern React features, React Router for navigation, and CRUD operations using Axios to interact with a JSON server.

## Features

- **React-based UI**: Leverages React to build a dynamic and responsive user interface.
- **CRUD Operations**: Create, Read, Update, and Delete contacts using Axios and a JSON server.
- **Routing with React Router**: Navigate between different views/pages without reloading the app.
- **State Management**: Use of React hooks like `useState` and `useEffect` to manage component states and side effects.
- **Semantic UI**: Integrated for a cleaner and more professional design.

## Technologies Used

- **React**: Frontend framework for building the UI.
- **React Router**: For navigating between different views of the application.
- **Axios**: To handle HTTP requests to the backend (JSON Server).
- **JSON Server**: A mock REST API for handling contact data.
- **Semantic UI**: A CSS framework for styling the components.

## Setup Instructions

1. **Clone the Repository**:
   First, clone this repository to your local machine using the following command:
   ```bash
   git clone https://github.com/Pheonix2852/Contact-Manager.git

2. **Install Dependencies**:
   Navigate to the project directory and install the required dependencies:
   ```bash
   cd Contact-Manager
    npm install

3. **Setup and Start JSON Server**:
   This project uses JSON Server to mock the backend. Install it globally:
   ```bash
   npm install -g json-server
   json-server --watch db.json --port 5000

4. **Start the React Development Server**:
   After the JSON Server is running, start the React development server:
   ```bash
   npm start

