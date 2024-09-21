import React, { useState, useRef } from "react";
import "./style.css";

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
            return
        }

        addNewTask(trimmedContent);
        setNewTaskContent("");
        focusInput();


    };

    return (
        <form className="form " onSubmit={onFormSubmit}>
            <input
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                id="newTask"
                name="newTask"
                className="form__input "
                type="text"
                placeholder="Co jest do zrobienia?"
                autoFocus
            />
            <button className="form__button " type="submit">Dodaj zadanie</button>
        </form>
    )
};



export default Form;