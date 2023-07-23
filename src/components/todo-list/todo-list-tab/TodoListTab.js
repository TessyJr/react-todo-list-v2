import "./TodoListTab.css";

const TodoListTab = ({ isTabCompleted, setIsTabCompleted }) => {
  const handleIsTabCompleted = () => {
    setIsTabCompleted(!isTabCompleted);
  };

  return (
    <div className="todo-list-tab-container">
      <button
        onClick={handleIsTabCompleted}
        disabled={!isTabCompleted}
        className="todo-list-tab-button"
      >
        Not Completed
      </button>
      <button
        onClick={handleIsTabCompleted}
        disabled={isTabCompleted}
        className="todo-list-tab-button"
      >
        Completed
      </button>
    </div>
  );
};

export default TodoListTab;
