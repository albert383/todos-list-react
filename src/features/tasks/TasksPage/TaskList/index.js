import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { List, Item, Content, StyledButton } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routes";
import { useQueryParameter } from "../../queryParameter";

const TaskList = () => {
  const dispatch = useDispatch();

  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  return (
    <List>
      {tasks.map((task) => (
        <Item
          key={task.id}
          $hidden={task.done && hideDone}
        >
          <StyledButton
            $toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔︎" : ""}
          </StyledButton>
          <Content $done={task.done}>
            <Link to={toTask({ id: task.id })}>{task.content}</Link>
          </Content>
          <StyledButton
            $remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑️
          </StyledButton>
        </Item>
      ))}
    </List >
  );
};

export default TaskList;