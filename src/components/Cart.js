const Cart = ({cart, setCart}) => {
    function handleOnDiscountChange(evt) {
        const cartState = { ...cart }
        cartState.discountCode = evt.target.value
        cartState.totalPrice = cartState.subTotalPrice - (cartState.subTotalPrice * cartState.discountCode / 100)
        cartState.discount = cartState.subTotalPrice - cartState.totalPrice
        setCart({ ...cartState})
    }

    return (
        <div>
            <h1>Cart</h1>
            <div>
            <hr></hr>
            <h3>Discout Code</h3>
            <select onChange={handleOnDiscountChange}>
                <option value="0">No code</option>
                <option value="10">OFF10</option>
                <option value="20">OFF20</option>
            </select>
            <hr></hr>

            {cart.items.map(item => {
                    return (
                        <>
                        
                        <p>{item.name}</p>
                        <p>${item.price} </p>
                        <hr></hr>
                        </>
                    )
                })}
            </div>
            <div>
                <h2>Sub total: $ {cart.subTotalPrice}</h2>
                <h2>Discout: $ {cart.discount} </h2>
                <h2>Total: $ {cart.totalPrice} </h2>
            </div>
        </div>
    )
}

export default Cart