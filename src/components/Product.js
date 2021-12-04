const Product = ({id, name, image, quantity, price, handleAddToCart, handleRemoveFromCart, cartState}) => {
    const isItemInCart = cartState.items.find(item => item.id === id)
    return (
        <div key={id}>
            <h2>{name}</h2>
            <img alt={`${name} nft`} width="300px" src={image}></img>
            <p>Price: ${`${price}`}</p>
            <div>
                {
                    isItemInCart ? 
                    <button onClick={(e) => handleRemoveFromCart(id)}>Remove from cart</button>
                    :
                    <button onClick={(e) => handleAddToCart(id)}>Add to cart</button>
                }
            </div>
        </div>
    )
}

export default Product