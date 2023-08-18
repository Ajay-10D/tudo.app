import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoInput);

    setTodoInput("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={todoInput}
        placeholder="What is the Task Today?"
        onChange={(event) => {
          setTodoInput(event.target.value);
        }}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
