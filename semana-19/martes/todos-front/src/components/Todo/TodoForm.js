import React from 'react'

const TodoForm = ({
  handleChange,
  handleSubmit,
  body,
  priority,
  error,
  _id
}) => (
  <div>
    <h3>Agrega un ToDo</h3>
    <form className='uk-text-left' onSubmit={handleSubmit}>
      <fieldset className='uk-fieldset'>
        <div className='uk-margin'>
          <label>Tarea:</label>
          <input
            onChange={handleChange}
            className={`uk-input ${error ? 'uk-form-danger' : ''}`}
            type='text'
            name='body'
            value={body}
            placeholder='todo'
          />
        </div>

        <div className='uk-margin'>
          <label>Prioridad:</label>
          <select
            name='priority'
            onChange={handleChange}
            className='uk-select'
            value={priority}
          >
            <option value='' disabled>
              Selecciona la prioridad
            </option>
            <option value='low'>Baja</option>
            <option value='medium'>Media</option>
            <option value='high'>Alta</option>
          </select>
        </div>

        <div className='uk-margin'>
          <div uk-form-custom='true'>
            <input type='file' name='images' onChange={handleChange} multiple />
            <button
              className='uk-button uk-button-default'
              type='button'
              tabindex='-1'
            >
              Select
            </button>
          </div>
        </div>
      </fieldset>
      <button className='uk-button uk-button-primary'>
        {_id ? 'Editar' : 'Agregar'} Todo
      </button>
    </form>

    {error && (
      <div className='uk-alert-danger uk-margin-small-top' uk-alert='true'>
        <p>{error}</p>
      </div>
    )}
  </div>
)

export default TodoForm
