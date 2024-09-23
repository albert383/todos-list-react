import React, { useState, useRef } from "react";
import { FormWrapper, Input, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

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

        addNewTask(trimmedContent);
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
