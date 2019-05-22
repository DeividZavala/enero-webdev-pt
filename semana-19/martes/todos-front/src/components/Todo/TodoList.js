import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, deleteItem, setTodo}) => (
    <div>
        <h3>Lista de ToDos</h3>
        {todos.map((todo, index) => 
        <TodoListItem 
            setTodo={() => setTodo(todo)}
            deleteItem={() => deleteItem(todo._id)} 
            key={index} {...todo} 
        />)}
    </div>
);

export default TodoList;