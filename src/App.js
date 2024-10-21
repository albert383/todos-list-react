import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { toAuthor, toTasks } from "./routes";
import Navigation from "./Navigation";

const App = () => (
  <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path={toTasks()}>
          <TasksPage />
        </Route>
        <Route path={toAuthor()}>
          <AuthorPage />
        </Route>
        <Redirect exact from="/" to={toTasks()} />
      </Switch>
  </HashRouter>
);

export default App;