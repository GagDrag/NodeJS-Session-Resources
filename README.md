# NodeJS Session Resources

Welcome to the **Node.js Session Resources** repository. This repo contains the complete code examples from the Node.js lecture conducted by Ojas Joshi. It covers a wide range of topics from basic server setup to building a full CRUD app with Express and MongoDB.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
4. [Installing Dependencies](#installing-dependencies)
5. [Running Each Project](#running-each-project)
6. [Project Descriptions](#project-descriptions)
7. [Additional Resources](#additional-resources)

---

## Prerequisites

Make sure you have the following installed before proceeding:
- **Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
- **MongoDB** (For the MongoDB projects): You can either install MongoDB locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based database solution.
- **Git**: To clone the repository.

To verify installation, run the following commands in your terminal:

```
node -v
npm -v
```

Ensure that both Node.js and npm are installed and display their versions.

---

## Project Structure

The repository is divided into multiple folders, each covering a distinct topic discussed in the lecture.

```
1-my-node-app/             # Basic Node.js app
2-custom-modules/          # Working with custom modules
3-my-first-server/         # Simple HTTP server
4-my-file-system/          # File System operations
5-my-express-app/          # Basic Express server setup
6-middleware/              # Middleware usage in Express
7-error-handling/          # Error handling in Express
8-serving-static-resources # Serving static files (CSS, JS, images)
9-mongo/                   # MongoDB and Mongoose connectivity
10-PRODUCT-CRUD-APP/       # Full CRUD application with Express and MongoDB
```

---

## Getting Started

1. **Clone the repository**:
   
   Use Git to clone the repository to your local machine.

   ```
   git clone https://github.com/yourusername/NodeJS-Session-Resources.git
   ```

2. **Navigate to the project directory**:

   ```
   cd NodeJS-Session-Resources
   ```

---

## Installing Dependencies

Each project folder contains its own `package.json` file that lists the required dependencies. To install the necessary dependencies for each project, follow these steps:

1. **Navigate to the desired project folder**:

   Example:
   ```
   cd 5-my-express-app
   ```

2. **Initialize npm and install dependencies**:

   Run the following commands:

   ```
   npm init -y  # This will initialize the project with a default package.json file
   npm install  # This will install the necessary dependencies listed in the package.json file
   ```

---

## Running Each Project

Once you’ve installed the necessary dependencies, you can run the applications.

1. **Running a Node.js apps**:
   
   For most of the projects, you can run the app using the following command:

   ```
   node app.js  # Or whatever the main file is refer todo.txt in each subfolder for more clarity
   ```

   This will start the server at `http://localhost:3000`. You can now interact with the application using Postman or a browser.

---

## Project Descriptions

### 1. **My Node App**
   - A simple Node.js application demonstrating the basics of running a JavaScript file with Node.

### 2. **Custom Modules**
   - Demonstrates how to create and use custom modules in Node.js.

### 3. **My First Server**
   - Basic HTTP server using the built-in `http` module in Node.js.

### 4. **My File System**
   - File system operations, such as reading and writing files asynchronously using the `fs` module.

### 5. **My Express App**
   - Introduces the Express.js framework, demonstrating how to handle routes and responses.

### 6. **Middleware**
   - Explains how middleware works in Express, covering request logging and other middleware functions.

### 7. **Error Handling**
   - Demonstrates structured error handling in an Express application.

### 8. **Serving Static Resources**
   - Shows how to serve static files such as HTML, CSS, JavaScript, and images using Express’s built-in middleware.

### 9. **MongoDB**
   - Explains how to connect a Node.js application to MongoDB using Mongoose.

### 10. **Product CRUD App**
   - A complete CRUD application for managing products using Express and MongoDB. This project integrates everything covered in the lecture, including:
     - CRUD operations (Create, Read, Update, Delete)
     - Routing
     - Database interaction with MongoDB and Mongoose

---

## Additional Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Cloud-based MongoDB)

Feel free to explore each project and practice the concepts covered in the session. If you run into any issues, check out the respective folder's code and make sure the necessary dependencies are installed.

Happy coding!

---
