import React from 'react';

const NewProduct = () => (
    <div>
        <form>
            <div>
                <label htmlFor="">Nombre del producto</label>
                <input name="name" type="text"/>
            </div>
            <div>
                <label htmlFor="">Precio del producto</label>
                <input name="price" type="number"/>
            </div>
            <div>
                <label htmlFor="">Descripción del producto</label>
                <textarea name="description"></textarea>
            </div>
            <div>
                <label htmlFor="">Imagenes del producto</label>
                <textarea name="images"></textarea>
            </div>
            <button>Picale mijo</button>
        </form>
    </div>
);

export default NewProduct;