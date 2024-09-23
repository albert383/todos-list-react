import { ButtonsWrapper, ButtonStyled } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <ButtonsWrapper>
            <ButtonStyled onClick={toggleHideDone}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </ButtonStyled>
            <ButtonStyled
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </ButtonStyled>
        </ButtonsWrapper>
    )
);

export default Buttons;
