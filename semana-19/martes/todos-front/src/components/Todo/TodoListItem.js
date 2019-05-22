import React from 'react';
import moment from 'moment';

const getModifier = priority => priority === 'low' ? 
'success' : priority === 'medium' ?
 'warning' : 'danger'

const TodoListItem = ({body, priority, deleteItem, expiration_date, setTodo}) => (
    <div className="uk-margin-small-bottom uk-card uk-card-default uk-padding-small">
        <div className="uk-card-body uk-flex uk-flex-middle uk-flex-around">
            <span>{body}</span>
            <span className={`uk-label uk-label-${getModifier(priority)}`}
                >{priority}</span>
        
            <div className="uk-inline">
                <button className="uk-button" type="button">
                    <span uk-icon="icon: chevron-down"></span>
                </button>
                <div uk-dropdown="true">
                    <ul className="uk-nav uk-dropdown-nav">
                        <li onClick={setTodo} ><a href="#">Editar <span uk-icon="icon: pencil"></span></a></li>
                        <li className="uk-nav-divider"></li>
                        <li onClick={deleteItem}><a href="#">Eliminar <span uk-icon="icon: trash"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="uk-card-footer">
            <a href="#" className="uk-button uk-button-text">Vence {moment(expiration_date).fromNow()}</a>
        </div>
    </div>
);

export default TodoListItem;