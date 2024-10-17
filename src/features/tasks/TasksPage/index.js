import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { ContainerWrapper } from "../../../common/Container/styled";
import { fetchExampleTasks } from "../tasksSlice";
import { ButtonStyled } from "./Buttons/styled";
import { useDispatch } from "react-redux";


function TasksPage() {
  const dispatch = useDispatch();

  return (
    <ContainerWrapper>
      <Header
        title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <ButtonStyled onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
          </ButtonStyled>
        }
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </ContainerWrapper>
  );
}

export default TasksPage;