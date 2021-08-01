import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let total = 0;

    for(let i=0;i<cart.length;i++){
        const product = cart[i];
        total = total+product.price;

    }
    let shipping = 0;
    if(total > 3325)
    {
        shipping = 0;
    }
    else if(total > 0){
          shipping = 15;
    }
    function tax(){
        const vat = total/10;
        return vat;
    }
    return (
        <div>
           <h4>Order summary</h4>
           <h6> Item ordered: {cart.length}</h6>
           <p>Product price:{total}</p>
           <p><small>Shipping Cost:{shipping} </small></p>
        <p><small>Tax+Vat: {tax()} </small></p>
           <h6>Total:{total+shipping+tax()} </h6>
        </div>
    );
};

export default Cart;