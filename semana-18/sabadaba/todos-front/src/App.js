import React, {Component} from 'react';
import UIkit from 'uikit';

// services 
import {createTodo, getTodos} from './services/todos';

// components
import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';

import './App.css';

class App extends Component {
  
  state = {
    todo: {
      body: "",
      priority: "low"
    },
    todos:[]
  }

  componentDidMount(){
    getTodos()
    .then(todos => {
      this.setState({todos})
    })
    .catch(error => {
      UIkit.notification({
        message: `<span uk-icon="icon:close"></span> ${error.message}`,
        status: "danger",
        position: "top-left"
      })
    })
  }

  handleChange = e => {
    const {todo} = this.state;
    const field = e.target.name;
    todo[field] = e.target.value;
    this.setState({todo});
  }

  handleSubmit = e => {
    e.preventDefault();
    let {todos, todo} = this.state;
    if(!todo.body.length) return this.setState({error: "Debes agregar una tarea"})
    createTodo(todo)
    .then(todo => {
      console.log(todo);
      todos.push(todo);
      todo = {
        body: "",
        priority: "low"
      };
      this.setState({todos, todo, error: undefined});
    })
    .catch(error => {
      this.setState({error: error.message})
    })
  }

  deleteItem = (index) => {
    const {todos} = this.state;
    todos.splice(index, 1);
    this.setState({todos});
  }

  render(){
    const {todo, todos, error} = this.state;
    return (
      <div className="App">
        <h1>ToDos</h1>
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid-match uk-child-width-1-2" uk-grid="true">
            <div>
              <TodoForm
                {...todo}
                error={error}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange} 
              />
            </div>
            <div>
              <TodoList
                todos={todos}
                deleteItem={this.deleteItem}
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;