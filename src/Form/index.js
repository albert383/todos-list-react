import "./style.css";

const Form = () => (
    <form className="form ">
        <input id="newTask" name="newTask" className="form__input " type="text"
            placeholder="Co jest do zrobienia?" autoFocus/>
        <button className="form__button " type="submit">Dodaj zadanie</button>
    </form>
);

export default Form;