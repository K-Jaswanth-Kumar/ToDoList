# React ToDoList

A simple yet powerful project management application built with **React** and **Tailwind CSS**. This application enables you to create projects, add tasks, and organize them efficiently.

![Project Screenshot](screenshots/cover.png)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Scripts](#scripts)
- [Technologies](#technologies)
- [Screenshots](#screenshots)
- [License](#license)
- [Author](#author)

---

## Overview

This application allows users to:
- Create projects with title, description, and due date.
- View a list of all created projects in a sidebar.
- Switch between different projects to view or manage tasks.
- Add, delete, and manage tasks under each project.
- Efficiently handle invalid inputs via modal dialogs.

The app leverages React’s state management to keep the UI in sync with any project or task changes.

---

## Features

1. **Create and Manage Projects**  
   Users can create new projects by specifying a title, description, and due date.

2. **Add and Delete Tasks**  
   Within each project, tasks can be added and deleted quickly to keep track of to-do items.

3. **Responsive UI**  
   Styled with Tailwind CSS, ensuring it’s responsive and visually appealing on different screen sizes.

4. **Modal Dialogs**  
   Custom reusable modal component to handle invalid form inputs and display messages.

---

## Project Structure

```
k-jaswanth-kumar-todolist/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
├── screenshots/        # Screenshots to help visualize the app
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    └── components/
        ├── Button.jsx
        ├── Input.jsx
        ├── Modal.jsx
        ├── NewProject.jsx
        ├── NewTask.jsx
        ├── NoProjectSelected.jsx
        ├── ProjectSidebar.jsx
        ├── SelectedProject.jsx
        └── Tasks.jsx
```

A brief explanation of important directories and files:

- **src/**: Main React application source code.
  - **App.jsx**: Root component where the main logic (projects, tasks, and UI states) resides.
  - **components/**: Contains reusable components like `Input`, `Modal`, etc.
  - **index.css**: Tailwind CSS imports.
  - **main.jsx**: Renders `App` into the DOM.
- **public/**: Place any static assets here if needed.
- **screenshots/**: Contains images showcasing the frontend.

---

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/k-jaswanth-kumar-todolist.git
   ```
2. **Navigate into the project directory**:
   ```bash
   cd k-jaswanth-kumar-todolist
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

---

## Usage

1. **Run the development server**:
   ```bash
   npm run dev
   ```
   This will start the project on a local development server (usually at `http://localhost:5173` by default with Vite).

2. **Open the browser**:
   - Go to `http://localhost:5173/`.
   - You can now create projects, add tasks, and explore the application features.

---

## Scripts

In the root directory, you can run the following scripts:

- **`npm run dev`**: Starts the development server with hot reloading.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build locally.
- **`npm run lint`**: Runs ESLint to check for code quality issues.

---

## Technologies

- **React 19+**
- **Tailwind CSS 3+**
- **Vite** (for build and dev server)
- **ESLint** (for linting)
- **JavaScript (JSX)**

---

## Screenshots

Below are some sample images from the `screenshots` folder to give you a quick look at the UI.

| Home / No Project Selected                    | Add Project Modal                      |
|----------------------------------------------|----------------------------------------|
| ![No Project Selected](https://github.com/K-Jaswanth-Kumar/ToDoList/blob/main/screenshots/1.png) | ![New Project Modal](https://github.com/K-Jaswanth-Kumar/ToDoList/blob/main/screenshots/2.png) |

| Tasks in a Project                     |
|----------------------------------------|
|  ![Tasks View](https://github.com/K-Jaswanth-Kumar/ToDoList/blob/main/screenshots/3.png) |

