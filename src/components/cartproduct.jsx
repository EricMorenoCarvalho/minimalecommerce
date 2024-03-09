import React from 'react'
import { PRODUCTSLIST } from './productslist'
import QuantitySelector from './quantityselector'

function CartProduct() {
    const firstProduct = PRODUCTSLIST[0]
    return (
        <div>
            <span className='title carttitle'>Your Shopping Cart ()</span>
            <div className='productcart'>
                <img src={firstProduct.productImgs[0]} alt="productimage" className='cartproductimages' />
                <span className='title cartproductname '>{firstProduct.productName}</span>
                <QuantitySelector />
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CartProduct