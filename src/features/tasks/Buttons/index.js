import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone } from "../tasksSlice";
import { ButtonsWrapper, ButtonStyled } from "./styled";


const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        !areTasksEmpty && (
            <ButtonsWrapper>
                <ButtonStyled onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </ButtonStyled>
                <ButtonStyled
                    onClick={() => dispatch(setAllDone())}
                    disabled={isEveryTaskDone}
                >
                    Ukończ wszystkie
                </ButtonStyled>
            </ButtonsWrapper>
        )
    );
};

export default Buttons;