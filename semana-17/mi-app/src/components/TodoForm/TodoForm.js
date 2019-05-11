import React from 'react';

const TodoForm = ({handleChange}) => (
    <div>
        <h3>Agrega un ToDo</h3>
        <form className="uk-text-left">
            <fieldset className="uk-fieldset">

                <div className="uk-margin">
                    <label>Tarea:</label>
                    <input
                        onChange={handleChange}
                        className="uk-input" 
                        type="text"
                        name="value"
                        placeholder="todo" 
                    />
                </div>

                <div className="uk-margin">
                    <label>Prioridad:</label>
                    <select name="priority" onChange={handleChange} className="uk-select" defaultValue="">
                        <option value="" disabled>Selecciona la prioridad</option>
                        <option>Baja</option>
                        <option>Media</option>
                        <option>Alta</option>
                    </select>
                </div>

            </fieldset>
            <button className="uk-button uk-button-primary">Agregar</button>
        </form>
    </div>
);

export default TodoForm;