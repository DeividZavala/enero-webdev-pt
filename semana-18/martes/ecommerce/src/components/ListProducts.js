import React from 'react';

const ListProducts = ({products}) => (
    <div>
        {products.length ? 

            products.map((product, index) => (
                <div key={index}>
                    <img width="100" height="100" src={product.images[0]} alt={product.name} />
                    <p>Nombre: {product.name}</p>
                    <p>Precio: ${product.price}.00</p>
                    <p>Desc: {product.description}</p>
                </div>
            ))

            :

            <p>No hay productos</p>
        
        }
    </div>
)

export default ListProducts;