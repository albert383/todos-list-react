import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { ContainerWrapper } from "../../../common/Container/styled";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { FormButton } from "../TasksPage/Form/styled";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    const history = useHistory();

    const handleGoBack = () => {
        history.push("/zadania");
    };

    return (
        <ContainerWrapper>
            <Header title="Szczegóły" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😥"}
                body={
                    <>
                        <strong>Ukończono:</strong> {
                            task ? (task.done ? "Tak" : "Nie") : "Nie wiadomo"
                        }
                    </>
                }
            />
            <FormButton onClick={handleGoBack} $alignRight>Wróć</FormButton>
        </ContainerWrapper>
    );
}

export default TaskPage;
