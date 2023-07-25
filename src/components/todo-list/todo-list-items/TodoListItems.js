import TodoListItem from "./todo-list-item/TodoListItem";
import "./TodoListItems.css";
import { AppContext } from "../../../App";
import { useContext } from "react";

const TodoListItems = ({ isTabCompleted }) => {
  const { todoList } = useContext(AppContext);

  return (
    <div className="todo-list-items-container">
      {isTabCompleted
        ? todoList.map((item) => {
            return item.isCompleted === true ? (
              <TodoListItem key={item.id} item={item} />
            ) : null;
          })
        : todoList.map((item) => {
            return item.isCompleted === false ? (
              <TodoListItem key={item.id} item={item} />
            ) : null;
          })}
    </div>
  );
};

export default TodoListItems;
