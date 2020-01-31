import React from "react";

export default props => (
  <form>
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
