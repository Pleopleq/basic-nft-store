const Product = ({id, name, image, quantity, price, handleAddToCart, handleRemoveFromCart, cartState}) => {
    const isItemInCart = cartState.items.find(item => item.id === id)
    return (
        <div key={id} className="product-container">
            <h2>{name}</h2>
            <img alt={`${name} nft`} className="product-image" src={image}></img>
            <p className="product-price">Price: ${`${price}`}</p>
            <div>
                {
                    isItemInCart ? 
                    <button className="secondary-btn" onClick={(e) => handleRemoveFromCart(id)}>Remove from cart</button>
                    :
                    <button className="primary-btn" onClick={(e) => handleAddToCart(id)}>Add to cart</button>
                }
            </div>
        </div>
    )
}

export default Product