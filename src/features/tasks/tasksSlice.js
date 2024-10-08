import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
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
        ],
    },

    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach(task => task.done = true);
        },
        removeTask: ({ tasks }, { payload }) => {
            return { tasks: tasks.filter(task => task.id !== payload) };
        },
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;