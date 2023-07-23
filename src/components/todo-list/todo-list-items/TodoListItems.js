import TodoListItem from "./todo-list-item/TodoListItem";
import "./TodoListItems.css";

const TodoListItems = ({ todoList, setTodoList, isTabCompleted }) => {
  return (
    <div className="todo-list-items-container">
      {isTabCompleted
        ? todoList.map((item) => {
            return item.isCompleted === true ? (
              <TodoListItem
                key={item.id}
                item={item}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            ) : null;
          })
        : todoList.map((item) => {
            return item.isCompleted === false ? (
              <TodoListItem
                key={item.id}
                item={item}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            ) : null;
          })}
    </div>
  );
};

export default TodoListItems;
