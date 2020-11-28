import React from 'react'

export default function Cart(){
    return(
        <div className = 'cart'>
            <h3 className = 'cart-title'>Your Order</h3>
            {itemsInCart.length > 0 ? (
                <div>
                    {
                        itemsInCart.map(item => (
                            <CartItem
                            key = {item.id}
                            name = {item.name}
                            cost = {item.price * item.quantity}
                            quantity = {item.quantity}
                            />
                        ))}
                        <div className = 'cart-total-cost'>
                            Total Cost: ${totalCost.toFixed(2)}
                            </div>
                        </div>
            ) : (
                <div> Add something to your cart! </div>
                 )}

        </div>
    )
}