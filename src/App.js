import { HashRouter, NavLink, Switch, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";
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
        <Route path="/zadania">
          <Tasks />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;