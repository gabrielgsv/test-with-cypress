import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";
import axios from "axios";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTodo: "",
      todos: []
    };
  }

  componentDidMount() {
    axios
      .get("http://locahost:3030/api/todos")
      .then(({ data }) => this.setState({ todos: data }))
      .catch(() => this.setState({ error: true }));
  }

  handleChange(value) {
    this.setState({
      currentTodo: value
    });
  }

  render() {
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            {this.state.error ? (
              <span className="error">Oh no! Error</span>
            ) : null}
            <TodoForm
              currentTodo={this.state.currentTodo}
              handleChange={value => this.handleChange(value)}
              currentTodo={this.state.currentTodo}
              setState={data => {
                this.setState({
                  todos: this.state.todos.concat(data),
                  currentTodo: ""
                });
              }}
              setError={() => {
                this.setState({
                  error: true
                });
              }}
            />
          </header>
          <section className="main">
            <TodoList todos={this.state.todos} />
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}
