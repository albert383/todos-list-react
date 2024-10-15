import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";

const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania">
          <Tasks />
        </Route>
      </Switch>
    </nav>
  </BrowserRouter>
);

export default App;