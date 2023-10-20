import { useOutletContext } from "react-router-dom";
import QtyButtons from "./QtyButtons.jsx";

function Store(){

    const [items, sortedCart, removeFromCart, addToCart] = useOutletContext();


    function inCart(name){
        for(let i = 0; i < sortedCart.length; i++){
            if(sortedCart[i].title===name){
                return true;
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
                                {inCart(item.title) ? (<QtyButtons name={item.title} sortedCart={sortedCart} removeFromCart={removeFromCart} addToCart={addToCart} />) : (<button className="add-to-cart-button" onClick={()=>addToCart(item.title)}>Add to Cart</button>)}
                            </div>

                        </div>)
                    })}
                </div>
            </div>)
}

export default Store