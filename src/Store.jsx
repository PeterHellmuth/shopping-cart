import { useOutletContext } from "react-router-dom";
import QtyButtons from "./QtyButtons.jsx";

function Store(){

    const [items, cartItems, removeFromCart, addToCart, setQty] = useOutletContext();

    function inCart(name){
        if(cartItems){
            for(let i = 0; i < cartItems.length; i++){
                if(cartItems[i].title===name){
                    return true;
                }
            }
        }

        return false;
    }



    return  (<div className="store-page">
                <div className="store-items">
                    {items.map((item, index) =>{
                        return (
                        <div key={index} className="store-item">
                            <h3>{item.title}</h3>
                            <img className="item-image" src={item.image}></img>
                            <div className="item-footer">
                                <span className="price-text">${item.price}</span>
                                {inCart(item.title) ? (<QtyButtons name={item.title} cartItems={cartItems} removeFromCart={removeFromCart} addToCart={addToCart} setQty={setQty}/>) : 
                                (<button className="add-to-cart-button" onClick={()=>addToCart(item.title)}>Add to Cart</button>)}
                            </div>

                        </div>)
                    })}
                </div>
            </div>)
}

export default Store