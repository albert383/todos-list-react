import Form from "./TasksPage/Form";
import TaskList from "./TasksPage/TaskList";
import Buttons from "./TasksPage/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { ContainerWrapper } from "../../common/Container/styled";

function Tasks() {

  return (
    <ContainerWrapper>
      <Header
        title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </ContainerWrapper>
  );
}

export default Tasks;