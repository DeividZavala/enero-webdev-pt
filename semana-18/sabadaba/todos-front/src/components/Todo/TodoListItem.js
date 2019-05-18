import React from 'react';

const getModifier = priority => priority === 'low' ? 
'success' : priority === 'medium' ?
 'warning' : 'danger'

const TodoListItem = ({body, priority, deleteItem}) => (
    <div className="uk-margin-small-bottom uk-card uk-card-body uk-card-default uk-flex uk-flex-middle uk-flex-around uk-padding-small">
        <span>{body}</span>
        <span className={`uk-label uk-label-${getModifier(priority)}`}
             >{priority}</span>
        <button 
        onClick={deleteItem}
        type="button" 
        uk-close="true"></button>
    </div>
);

export default TodoListItem;