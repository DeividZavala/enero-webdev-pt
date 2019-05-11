import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, deleteItem}) => (
    <div>
        <h3>Lista de ToDos</h3>
        {todos.map((todo, index) => <TodoListItem deleteItem={() => deleteItem(index)} key={index} {...todo} />)}
    </div>
);

export default TodoList;