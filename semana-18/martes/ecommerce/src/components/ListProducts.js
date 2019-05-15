import React from 'react';

const ListProducts = ({products}) => (
    <div>
        <div>
            <img src={product.images[0]} alt={products.name} />
            <p>Nombre: {products.name}</p>
            <p>Precio: {products.price}</p>
            <p>Desc: {products.description}</p>
        </div>
    </div>
)