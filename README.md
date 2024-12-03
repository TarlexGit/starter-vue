## Project with Vue, Vite, Tailwind CSS, Docker, and Docker Compose

### Introduction

This project demonstrates how to set up and run a frontend application using Vue.js, Vite, Tailwind CSS, Docker, and Docker Compose. The goal of the project is to provide a basic setup for developing a modern web application using these technologies.

### Project Structure

```
├── frontend
│   ├── src
│   │   ├── main.js
│   │   ├── App.vue
│   │   └── ...
│   ├── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── package.json
├── docker-compose.yml
└── README.md
```

### Project Goal

The project is designed to quickly set up and run a frontend application using Vue 3, Vite, Tailwind CSS, and containerization with Docker and Docker Compose.

### Running the Project

#### Installing Dependencies

Before running the project, ensure all necessary dependencies are installed:

```bash
cd frontend
yarn install
```

#### Running the Project with Docker Compose

To run the project using Docker Compose, execute the following command in the project root:

```bash
docker-compose up --build
```

This command will create and start the containers necessary for your application.

### Accessing the Application

After the project is running, you can access your application at:

```
http://localhost:3000
```

### Stopping and Removing Containers

To stop and remove the containers, use the following command:

```bash
docker-compose down
```

This project provides a basic setup for developing a frontend application using Vue.js, Vite, Tailwind CSS, Docker, and Docker Compose.
