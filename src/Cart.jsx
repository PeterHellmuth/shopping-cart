import { useOutletContext, Link } from "react-router-dom";
import QtyButtons from "./QtyButtons.jsx";

function Cart(){
    const [items, cartItems, removeFromCart, addToCart, setQty] = useOutletContext();
    
    let isCartEmpty = true;

    if(cartItems){
        if(cartItems.length > 0){
            isCartEmpty = false;
        }
    }


    if(!isCartEmpty){
        let totalPrice = 0;
        for(let i = 0; i < cartItems.length; i++){
            totalPrice += cartItems[i].price*cartItems[i].quantity;
        }
        totalPrice = Math.round(totalPrice * 100) / 100

    return  (<>
    <h1>Your cart:</h1>
    <div className="cart-page">          
        <div className="cart-items">
        {cartItems.map((item, index) =>(
            <div key={index} className="cart-item">
                <div className="container">
                    <img src={item.image} className="cart-item-image"></img>
                    <h4>{item.title}</h4>
                </div>
                <div className="price-and-qty">
                    <span>Price: ${item.price}</span>
                    <QtyButtons name={item.title} cartItems = {cartItems} removeFromCart={removeFromCart} addToCart={addToCart} setQty={setQty}/>
                    <span>Total: ${Math.round((item.price*item.quantity) * 100) / 100}</span>
                </div>
            </div>
        ))}
        </div>
        <div className="total-checkout">
            <span>Cart Total: ${totalPrice}</span>
            <button onClick={()=>alert("This isn't a real store.")} className="checkout-button">Checkout</button>
        </div>

    </div>
    </>)
    } else{
        return <div className="home-page"><h1>Your cart is empty!</h1>
        <Link to="/store/"><button className="store-button">Go pick some stuff!</button></Link></div>
    }



}

export default Cart