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
            <div className="cart-item__container">
            {
            cart.items.length === 0 ? 
            <p className="cart-noitems">No items in your cart :(</p>
            :
            cart.items.map(item => {
                    return (
                        <div>
                        <img alt={`${item.name} nft`} className="product-image__incart" src={item.image}></img>
                        <p className="cart-item__name">{item.name}</p>
                        <p className="cart-item__price">${item.price} </p>
                        <hr></hr>
                        </div>
                    )
                })}
            </div>
            </div>
            <div>
                <h2>Sub total: $ {cart.subTotalPrice}</h2>
                <h2>Discout: <span className={cart.discount > 0 ? "cart-discount" : '' }>$ {cart.discount}</span></h2>
                <h2>Total: <span className={cart.discount > 0 ? "cart-discount" : '' }>$ {cart.totalPrice}</span></h2>
            </div>
        </div>
    )
}

export default Cart