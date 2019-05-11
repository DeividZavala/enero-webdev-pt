import React from 'react';

const TodoListItem = ({value, priority}) => (
    <div className="uk-card uk-card-body uk-card-default uk-flex uk-flex-middle uk-flex-around uk-padding-small">
        <span>{value}</span>
        <span className="uk-label uk-label-success">Baja</span>
    </div>
);

export default TodoListItem;