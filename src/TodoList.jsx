import React, { useState, useEffect } from "react";
import "./styles.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //useEffect(() => {
  //const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  //setTodos(storedTodos);
  //}, []);

  //useEffect(() => {
  //localStorage.setItem("todos", JSON.stringify(todos));
  //}, [todos]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  const handleTodoDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Add a todo..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
