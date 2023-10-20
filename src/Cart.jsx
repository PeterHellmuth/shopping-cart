import { useOutletContext } from "react-router-dom";
import QtyButtons from "./QtyButtons.jsx";

function Cart(){
    const [items, sortedCart, removeFromCart, addToCart] = useOutletContext();

    let totalPrice = 0;
    for(let i = 0; i < sortedCart.length; i++){
        totalPrice += sortedCart[i].price*sortedCart[i].quantity;
    }

    totalPrice = Math.round(totalPrice * 100) / 100

    return  (<div className="cart-page">
                <h1>Your cart:</h1>
                <div className="cart-items">
                {sortedCart.map((item, index) =>(
                    <div key={index} className="cart-item">
                        <div className="container">
                            <img src={item.image} className="cart-item-image"></img>
                            <h4>{item.title}</h4>
                        </div>
                        <div className="price-and-qty">
                            <span>Price: ${item.price}</span>
                            <QtyButtons name={item.title} sortedCart = {sortedCart} removeFromCart={removeFromCart} addToCart={addToCart} />
                            <span>Total: ${Math.round((item.price*item.quantity) * 100) / 100}</span>
                        </div>
                    </div>
                ))}
                </div>
                <div className="total-checkout">
                    <span>Cart Total: ${totalPrice}</span>
                    <button onClick={()=>alert("This isn't a real store.")}>Checkout</button>
                </div>

            </div>)
}

export default Cart