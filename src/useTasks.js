import { useState, useEffect } from "react";

const defaultTasks = [
    { id: 1, content: "przejść na react", done: false },
    { id: 2, content: "zjeść obiad", done: true },
];

export const useTasks = () => {
    const getInitialTasks = () => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
    };

    const [hideDone, setHideDone] = useState(false);
    const [tasks, setTasks] = useState(getInitialTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const toggleHideDone = () => {
        setHideDone((prev) => !prev);
    };

    const removeTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    const setAllDone = () => {
        setTasks((prev) =>
            prev.map((task) => ({ ...task, done: true }))
        );
    };

    const addNewTask = (content) => {
        setTasks((prev) => [
            ...prev,
            {
                content,
                done: false,
                id: prev.length ? prev[prev.length - 1].id + 1 : 1,
            },
        ]);
    };

    return {
        tasks,
        hideDone,
        toggleHideDone,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
    };
};