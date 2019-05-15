import React from 'react';

const NewProduct = ({handleChange, name, images, price, description, handleSubmit}) => (
    <div>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Nombre del producto</label>
            <input onChange={handleChange} value={name} name="name" type="text"/>
        </div>
        <div>
            <label htmlFor="">Precio del producto</label>
            <input onChange={handleChange} value={price} name="price" type="number"/>
        </div>
        <div>
            <label htmlFor="">Descripción del producto</label>
            <textarea onChange={handleChange} name="description" value={description}></textarea>
        </div>
        <div>
            <label htmlFor="">Imagenes del producto</label>
            <small>(Separa las images con comas)</small>
            <textarea onChange={handleChange} name="images" defaultValue={images}></textarea>
        </div>
        <button>Picale mijo</button>
    </form>
</div>
)

export default NewProduct;