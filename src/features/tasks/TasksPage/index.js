import React, { useState } from "react";
import { fetchExampleTasks } from "../tasksSlice";
import { useDispatch } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import { ButtonStyled } from "./Buttons/styled";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { ContainerWrapper } from "../../../common/Container/styled";
import Search from "./Search";



function TasksPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFetchExampleTasks = async () => {
    setLoading(true);
    setError(false);
  
    try {
      
      await new Promise((resolve) => setTimeout(resolve, 2000));
      dispatch(fetchExampleTasks());
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerWrapper>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <>
            <ButtonStyled
              onClick={handleFetchExampleTasks}
              disabled={loading}
            >
              {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </ButtonStyled>
            {error && <p style={{ color: "red" }}>Upps, pobieranie nie powiodło się. Spróbuj ponownie później.</p>}
          </>
        }
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
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