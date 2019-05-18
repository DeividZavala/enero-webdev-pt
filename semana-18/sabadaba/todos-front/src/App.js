import React, {Component} from 'react';
import UIkit from 'uikit';

// services 
import {createTodo, getTodos, deleteTodo, editTodo} from './services/todos';

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
      todos.reverse();
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

  setTodo = todo => {
    this.setState({todo});
  }

  handleChange = e => {
    const {todo} = this.state;
    const field = e.target.name;
    todo[field] = e.target.value;
    this.setState({todo});
  }

  handleSubmit = e => {
    e.preventDefault();
    const {todo, todos} = this.state;
    if(!todo.body.length) return this.setState({error: "Debes agregar una tarea"})
    const index = todos.findIndex(t => t._id === todo._id);
    todo._id ? this.onEditTodo(index) : this.onCreateTodo();
  }

  onEditTodo = (index) => {
    let {todos, todo} = this.state;
    editTodo(todo)
      .then(todo => {
        console.log(todo);
        todos.splice(index, 1, todo);
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

  onCreateTodo = () => {
    let {todos, todo} = this.state;
    createTodo(todo)
    .then(todo => {
      console.log(todo);
      todos.unshift(todo);
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

  deleteItem = id => {
    let {todos} = this.state;
    deleteTodo(id)
    .then(todo => {

      UIkit.notification({
        message: `<span uk-icon="icon:check"></span> ${todo._id} eliminado con exito`,
        status: "success",
        pos: "top-right"
      })

      todos = todos.filter(todo => todo._id !== id);
      this.setState({todos});

    })
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
                setTodo={this.setTodo}
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