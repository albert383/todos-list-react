import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { ButtonsWrapper, ButtonStyled } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <ButtonsWrapper>
                <ButtonStyled onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </ButtonStyled>
                <ButtonStyled
                    onClick={() => dispatch(setAllDone())}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </ButtonStyled>
            </ButtonsWrapper>
        )
    );
};

export default Buttons;
