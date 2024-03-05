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
            </div>
        </div>
    )
}

export default CartProduct