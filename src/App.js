import { HashRouter, Switch, Route } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { List, Item } from "./features/tasks/TasksPage/TaskList/styled";
import { StyledNavLink } from "./styled";

const App = () => (
  <HashRouter>
    <nav>
      <List $nav>
        <Item $nav>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </Item>
        <Item $nav>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </Item>
      </List>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;