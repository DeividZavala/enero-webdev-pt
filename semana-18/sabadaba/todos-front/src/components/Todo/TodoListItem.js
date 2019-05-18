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
        <div className="uk-inline">
            <button className="uk-button" type="button">
                <span uk-icon="icon: chevron-down"></span>
            </button>
            <div uk-dropdown="true">
                <ul className="uk-nav uk-dropdown-nav">
                    <li><a href="#">Editar <span uk-icon="icon: pencil"></span></a></li>
                    <li className="uk-nav-divider"></li>
                    <li><a href="#">Eliminar <span uk-icon="icon: trash"></span></a></li>
                </ul>
            </div>
        </div>
    </div>
);

export default TodoListItem;