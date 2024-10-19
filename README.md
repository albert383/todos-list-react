# Task list - React

## About

This project is a simple To-Do List application built using HTML, CSS(with flexbox and grid), JavaScript, Webpack, Babel, Create-React-App, JSX. It allows users to add new tasks, mark them as done, and delete them. The state management has been migrated to **Redux Toolkit**, allowing for better scalability and maintainability.
- Clone the repository to your local machine:

   ```bash
   albert383.github.io/todos-list-react/

## Description

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses **Redux Toolkit** for state management.

## Features

- Adding new tasks to the list.
- Marking tasks as done.
- Deleting tasks from the list.
- Button Show/Hide done tasks.
- Button Finish all tasks.
- Automatically focusing on the input field after adding a task.
- **Redux state management** for tasks (instead of local state).
- Responsive design for various screen sizes (thanks to mediaquery, flexbox, and grid).
- Using emoji with a checkmark to confirm task completion.
- Local storage for all old and new tasks.
- All styles have been migrated to styled-components, making it easier to manage styles and ensuring modularity.
- **Task filtering** has been added using URL query parameters with custom React hooks (`useQueryParameter` and `useReplaceQueryParameter`).
- Added "Fetch Example Tasks" button, which displays a loading state ("Ładowanie...") for at least 2000ms while loading tasks.
- Implemented Redux-Saga to handle side effects such as saving tasks to `localStorage` and fetching example tasks.
- Added an "About Author" page with navigation.
- Improved navigation:
  - Active links are now bold.
  - Links to tasks have been styled to remove underlining and use the color teal.
  

## Usage Instructions

   ![Adding Task](https://zapodaj.net/images/da702a43e6ad0.gif)

1. **Adding a New Task:**

   - Enter the task description in the input field under the "Dodaj nowe zadanie" (Add new task) section.
   - Click the "dodaj zadanie" (Add task) button or press Enter to add the task to the list.

2. **Marking a Task as Done:**
   - Click the green checkmark button next to the task you want to mark as done.
   - Once clicked, the task will be visually updated with a strikethrough to indicate its completion.
   - You can also toggle this status back to undone if needed.

3. **Removing a Task:**
   - Click the red "X" button next to the task you want to remove.
   - The task will be immediately deleted from the list.

4. **Hiding or Showing Completed Tasks:**
   - Use the "Ukryj ukończone" (Hide completed) button to hide tasks that have been marked as done.
   - Clicking the button again (which will change to "Pokaż ukończone") will reveal the hidden tasks.

5. **Marking All Tasks as Done:**
   - Click the "Ukończ wszystkie" (Finish all) button to mark all tasks on the list as completed.
   - If all tasks are already marked as done, this button will be disabled.

6. **Redux State Management:**
   - The application uses **Redux Toolkit** for managing the global state.
   - This ensures that task state is managed centrally, and the actions (such as adding, removing, or toggling tasks) are dispatched and handled globally.

7. **Task Filtering:**
   - You can filter tasks using the input field labeled "Filtruj zadania".
   - The search query is reflected in the URL as a query parameter (`?szukaj=...`).
   - Filtering is implemented using custom hooks (`useQueryParameter` and `useReplaceQueryParameter`) to manage the query parameters.

8. **Fetching Example Tasks:**
   - Click the "Pobierz przykładowe zadania" (Fetch Example Tasks) button.
   - While the tasks are being fetched, the button will display "Ładowanie..." for at least 2000ms.

9. **Saving to Local Storage with Redux-Saga:**
   - Tasks are automatically saved to `localStorage` after any action is performed (adding, removing, or editing tasks).
   - Redux-Saga handles the side effects of saving tasks.

10. **Navigation:**
   - The app now includes an "About Author" page.
   - Navigation links to tasks are not underlined and use the color teal.
   - Active links are displayed in bold.

11. **Responsive Design:**
   - The layout is fully responsive, adapting to various screen sizes for a seamless experience on desktops, tablets, and mobile devices.
   - The design uses media queries, flexbox, and grid to ensure the layout remains user-friendly across different devices and orientations.

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
