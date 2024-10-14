import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormWrapper, Input, FormButton } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    
    const dispatch = useDispatch();

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedContent = newTaskContent.trim();

        if (!trimmedContent) {
            focusInput();
            return;
        }

        dispatch(addTask({
            content: trimmedContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        focusInput();
    };

    return (
        <FormWrapper onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                type="text"
                placeholder="Co jest do zrobienia?"
                autoFocus
            />
            <FormButton type="submit">Dodaj zadanie</FormButton>
        </FormWrapper>
    );
};

export default Form;
