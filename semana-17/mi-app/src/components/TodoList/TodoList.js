import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos}) => (
    <div>
        <h3>Lista de ToDos</h3>
        {todos.map((todo, index) => <TodoListItem key={index} {...todo} />)}
    </div>
);

export default TodoList;