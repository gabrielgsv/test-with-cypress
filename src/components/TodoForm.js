import React from "react";
import axios from "axios";

export default props => {
  const handleTodoSubmit = e => {
    e.preventDefault();
    const newTodo = { name: props.currentTodo, isComplete: false };
    axios
      .post("http://localhost:3030/api/todos", newTodo)
      .then(({ data }) => {
        props.setState(data);
      })
      .catch(props.setError);
  };

  return (
    <form onSubmit={handleTodoSubmit}>
      <input
        autoFocus
        type="text"
        value={props.currentTodo}
        onChange={e => props.handleChange(e.target.value)}
        className="new-todo"
        placeholder="What needs to be done?"
      />
    </form>
  );
};
