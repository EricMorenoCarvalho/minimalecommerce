import React from 'react'
import './cartcomponent.css'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='cartleft text'>
                <span>
                    Subtotal
                </span>
            </div>
            <div className='cartright text'>
                <button className='button text bg-white'>
                    Go to checkout
                </button>
            </div>
        </div>
    )
}

export default Checkout