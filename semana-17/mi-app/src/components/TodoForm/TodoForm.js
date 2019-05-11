import React from 'react';

const TodoForm = ({handleChange, handleSubmit, value, priority}) => (
    <div>
        <h3>Agrega un ToDo</h3>
        <form className="uk-text-left" onSubmit={handleSubmit}>
            <fieldset className="uk-fieldset">

                <div className="uk-margin">
                    <label>Tarea:</label>
                    <input
                        onChange={handleChange}
                        className="uk-input" 
                        type="text"
                        name="value"
                        value={value}
                        placeholder="todo" 
                    />
                </div>

                <div className="uk-margin">
                    <label>Prioridad:</label>
                    <select 
                        name="priority" 
                        onChange={handleChange} 
                        className="uk-select" 
                        value={priority}
                    >
                        <option value="" disabled>Selecciona la prioridad</option>
                        <option value="low" >Baja</option>
                        <option value="medium" >Media</option>
                        <option value="high" >Alta</option>
                    </select>
                </div>

            </fieldset>
            <button className="uk-button uk-button-primary">Agregar</button>
        </form>
    </div>
);

export default TodoForm;