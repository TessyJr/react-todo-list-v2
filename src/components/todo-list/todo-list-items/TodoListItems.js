import TodoListItem from "./todo-list-item/TodoListItem";
import "./TodoListItems.css";
import { AppContext } from "../../../App";
import { useContext } from "react";

const TodoListItems = ({ isTabCompleted }) => {
  const { todoList } = useContext(AppContext);

  return (
    <div className="todo-list-items-container">
      {todoList
        .filter((item) =>
          isTabCompleted ? item.isCompleted : !item.isCompleted
        )
        .map((item) => (
          <TodoListItem key={item.id} item={item} />
        ))}
    </div>
  );
};

export default TodoListItems;
