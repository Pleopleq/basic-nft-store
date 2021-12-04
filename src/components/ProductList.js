import products from '../products.json'
import Product from './Product'

const ProductList = ({cart, setCart}) => {

    function checkNewPrices(cartState) {
        if(cartState.discountCode > 0) {
            cartState.totalPrice = cartState.subTotalPrice - (cartState.subTotalPrice * cartState.discountCode / 100)
            cartState.discount = cartState.subTotalPrice - cartState.totalPrice
        }
    }

    function handleAddToCart(id) {
        const cartState = {...cart}
        const productToCart = products.productList.find(item => item.id === id)

        cartState.items.push(productToCart)
        cartState.subTotalPrice = productToCart.price + cartState.subTotalPrice
        cartState.totalPrice = cartState.subTotalPrice 

        checkNewPrices(cartState)

        setCart({...cartState})
    }

    function handleRemoveFromCart(id) {
        const cartState = {...cart}
        const productToRemove = cartState.items.find(item => item.id === id)
        const indexToRemove = cartState.items.findIndex(item => item.id === id)

        cartState.subTotalPrice = cartState.subTotalPrice - productToRemove.price 
        cartState.totalPrice = cartState.totalPrice - productToRemove.price

        checkNewPrices(cartState)
        
        cartState.items.splice(indexToRemove, 1);

        setCart({...cartState})

    }

    return (
        <div> 
            <h1>Product list</h1>
            <div>
                {products.productList.map(product => {
                    return (
                        <Product
                        cartState={cart}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        quantity={product.quantity}
                        price={product.price}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        >
                        </Product>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList