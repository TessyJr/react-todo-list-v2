import "./TodoListItem.css";
import { AppContext } from "../../../../App";
import { useContext } from "react";

const TodoListItem = ({ item }) => {
  const { todoList, setTodoList } = useContext(AppContext);

  const handleDeleteTodoList = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const handleCompleteTodoListItem = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, isCompleted: true } : item
      )
    );
  };

  return (
    <div
      className={`todo-list-item-container ${
        item.isCompleted === true
          ? "todo-list-item-container-complete"
          : "todo-list-item-container-not-complete"
      }`}
    >
      <p>{item.name}</p>

      <div className="todo-list-item-icons">
        {item.isCompleted === false ? (
          <svg
            onClick={() => {
              handleCompleteTodoListItem(item.id);
            }}
            className="todo-list-item-tick"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        ) : null}

        <svg
          onClick={() => {
            handleDeleteTodoList(item.id);
          }}
          className="todo-list-item-trash"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default TodoListItem;
