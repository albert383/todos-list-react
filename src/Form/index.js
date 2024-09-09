import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedContent = newTaskContent.trim();

        if (!trimmedContent) {
            return
        }

        addNewTask(trimmedContent);
        setNewTaskContent("");
    };

    return (
        <form className="form " onSubmit={onFormSubmit}>
            <input
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