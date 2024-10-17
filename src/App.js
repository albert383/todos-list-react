import { HashRouter, NavLink, Switch, Route } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { List, Item } from "./features/tasks/TasksPage/TaskList/styled";

const App = () => (
  <HashRouter>
    <nav>
      <List $nav>
        <Item $nav>
          <NavLink to="/zadania" activeClassName="active">Zadania</NavLink>
        </Item>
        <Item $nav>
          <NavLink to="/autor" activeClassName="active">O autorze</NavLink>
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