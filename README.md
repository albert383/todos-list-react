# Task list - React

## About

This project is a simple To-Do List application built using HTML, CSS(with flexbox and grid), JavaScript, Webpack, Babel, Create-React-App, JSX. It allows users to add new tasks, mark them as done, and delete them.
- Clone the repository to your local machine:

   ```bash
   albert383.github.io/todos-list-react/

Description

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- Adding new tasks to the list.
- Marking tasks as done.
- Deleting tasks from the list.
- Button Show/Hide done tasks
- Button Finish all tasks
- Automatically focusing on the input field after adding a task.
- Responsive design for various screen sizes (thanks to mediaquery, flexbox and grid).
- Using emoji with a checkmark to confirm task completion.
- Local storage for all old and new tasks.
  

## Usage Instructions

   ![Adding Task](https://zapodaj.net/images/b7c45e4c7f5ba.gif)

1. **Adding a New Task:**

   - Enter the task description in the input field under the "Dodaj nowe zadanie" (Add new task) section.
   - Click the "dodaj zadanie" (Add task) button or press Enter to add the task to the list.

2. **Marking a Task as Done:**
-Click the green checkmark button next to the task you want to mark as done.
-Once clicked, the task will be visually updated with a strikethrough to indicate its completion.
-You can also toggle this status back to undone if needed.

3. **Removing a Task:**
-Click the red "X" button next to the task you want to remove.
-The task will be immediately deleted from the list.

4. **Hiding or Showing Completed Tasks:**
-Use the "Ukryj ukończone" (Hide completed) button to hide tasks that have been marked as done.
-Clicking the button again (which will change to "Pokaż ukończone") will reveal the hidden tasks.

5. **Marking All Tasks as Done:**
-Click the "Ukończ wszystkie" (Finish all) button to mark all tasks on the list as completed.
-If all tasks are already marked as done, this button will be disabled.

6. **Responsive Design:**
-The layout is fully responsive, adapting to various screen sizes for a seamless experience on desktops, tablets, and mobile devices.
-The design uses media queries, flexbox, and grid to ensure the layout remains user-friendly across different devices and orientations.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

