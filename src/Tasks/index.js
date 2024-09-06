import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="section__list">
    {tasks.map((task) => (
      <li  
        className={`section__listItem {
        task.done && hideDoneTasks ? "section__listItem--hidden" : ""}`}
        key={task.id}>
        <button className="section__button section__button--done">
          {task.done ? "✔︎" : ""}
        </button>
        <span className={`section__listItemText 
              {task.done ? "section__listItemText--done" : ""}`}>
          {task.content}
        </span>
        <button className="section__button section__button--remove">
          🗑️
        </button>
      </li>
    ))}
  </ul >
);

export default Tasks;