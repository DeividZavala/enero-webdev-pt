import React from 'react';

const TodoForm = () => (
    <div>
        <h3>Agrega un ToDo</h3>
        <form>
            <fieldset class="uk-fieldset">

                <div class="uk-margin">
                    <label>Tarea:</label>
                    <input class="uk-input" type="text" placeholder="todo" />
                </div>

                <div class="uk-margin">
                    <label>Prioridad:</label>
                    <select class="uk-select">
                        <option>Selecciona la prioridad</option>
                        <option>Baja</option>
                        <option>Media</option>
                        <option>Alta</option>
                    </select>
                </div>

            </fieldset>
        </form>
    </div>
);

export default TodoForm;