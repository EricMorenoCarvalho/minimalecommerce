import React from 'react';

function Checkout({ cart }) {


    return (
        <div className='checkout'>
            <div className='checkout-container text'>
                <span className='text'>
                    Subtotal:
                </span>
            </div>
            <button className='button text bg-white checkoutbutton'>
                Go to checkout
            </button>
        </div>
    );
}

export default Checkout;