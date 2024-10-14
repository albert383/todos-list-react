import { useSelector, useDispatch } from "react-redux";
import { ButtonsWrapper, ButtonStyled } from "./styled";
import {
    toggleHideDone,
    setAllDone,
    selectAreTasksEmpty,
    selectHideDone,
    selectIsEveryTaskDone,
    fetchExampleTasks
} from "../tasksSlice";


const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <ButtonsWrapper>
            <ButtonStyled onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </ButtonStyled>
            {!areTasksEmpty && (
                <>
                    <ButtonStyled onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </ButtonStyled>
                    <ButtonStyled
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </ButtonStyled>
                </>
            )}
        </ButtonsWrapper>
    );
};

export default Buttons;