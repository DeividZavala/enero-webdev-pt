import React, {Component} from 'react';

// components
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

import './App.css';

class App extends Component {
  
  state = {
    todo: {
      value: "",
      priority: "low"
    },
    todos:[]
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
    if(!todo.value.length) return this.setState({error: "Debes agregar una tarea"})
    todos.push(todo);
    todo = {
      value: "",
      priority: "low"
    };
    this.setState({todos, todo, error: undefined}, () => console.log(this.state));
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
