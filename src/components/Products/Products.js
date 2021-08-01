import React from 'react';
import './Products.css';

const Products = (props) => {
    //console.log(props);
    const {img,name,seller,price,stock} = props.products;
    return (
       <div className="products">
            <div>
           <img src={img} alt="" />
        </div>
        <div>
        <h4 className="product-name">{name}</h4>
        <p><small>By {seller}</small></p>
        <p>${price}</p>
        <p><small>Only {stock} in slock-order soon</small></p>
        <button className="main-button"
        onClick={() => props.handleAddProduct(props.products)}
        >
            Add to cart
        </button>
        </div>
       </div>
    );
};

export default Products;