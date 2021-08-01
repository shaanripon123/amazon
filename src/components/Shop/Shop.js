import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProdcts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
       const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div>
<div className="shop-container">
            
<div className="product-container">
<ul>
{
             products.map(product => <Products
                handleAddProduct = {handleAddProduct}
                products={product}></Products> )
        }
        </ul>
</div>
<div className="cart-container">
  <Cart cart={cart}></Cart>
</div>
</div>
       
        </div>
    );
};

export default Shop;