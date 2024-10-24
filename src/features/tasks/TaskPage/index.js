import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { ContainerWrapper } from "../../../common/Container/styled";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { FormButton } from "../TasksPage/Form/styled";
import { toTasks } from "../../../routes";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    const history = useHistory();

    const handleGoBack = () => {
        history.push(toTasks());
    };

    return (
        <ContainerWrapper>
            <Header title="Szczegóły" />
            <Section
                title={task ? task.content : "Nie znaleziono takiego zadania 😥"}
                body={!!task && (
                    <>
                        <strong>Ukończono</strong>: {task.done ? "Tak" : "Nie"}
                    </>
                )}
            />
            <FormButton onClick={handleGoBack} $alignRight>Wróć</FormButton>
        </ContainerWrapper>
    );
}

export default TaskPage;
