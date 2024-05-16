import React from 'react'

const Cart = ({ cart }) => {
    let subTotal = cart.reduce((sum, item) => {
        let price = (item.price * 80) - (item.price - item.discountPercentage);
        return sum + price
    }, 0)
    return (
        <div>
            {cart.map((api) => (
                <div className="card" style={{width:"20rem"}} key={api.id}>
                    <img src={api.thumbnail} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Price: {(api.price*80)-(api.price-api.discountPercentage)}</p>
                        </div>
                </div>
            ))}
            <h1>Total: {subTotal}</h1>
        </div>
    )
}

export default Cart