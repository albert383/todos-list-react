import { createSlice } from "@reduxjs/toolkit";

const initialTasks = [
    {
        id: 1,
        content: "Przykładowe zadanie",
        done: true,
    },
    {
        id: 2,
        content: "Drugie przykładowe zadanie",
        done: false,
    },
];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: initialTasks,
    },

    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex(({ id }) => id === taskID);
            tasks[index].done = !tasks[index].done;
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        removeTask: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex(({ id }) => id === taskID);
            tasks.splice(index, 1);
        },
    },
});

export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const areAllTasksDone = (state) => selectTasks(state).every(task => task.done);
export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export default tasksSlice.reducer;
