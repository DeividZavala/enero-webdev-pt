import React, {Component} from 'react';

// components
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

import './App.css';

class App extends Component {
  
  state = {
    todo: {
      value: "",
      priority: ""
    },
    todos:[]
  }

  handleChange = e => {
    const {todo} = this.state;
    const field = e.target.name;
    todo[field] = e.target.value;
    this.setState({todo}, () => console.log(this.state));
  }

  render(){
    return (
      <div className="App">
        <h1>ToDos</h1>
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid-match uk-child-width-1-2" uk-grid="true">
            <div>
              <TodoForm handleChange={this.handleChange} />
            </div>
            <div>
              <TodoList />
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
