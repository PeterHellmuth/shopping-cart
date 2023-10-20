function QtyButtons({ name, cartItems, addToCart, removeFromCart, setQty }) {
  let item = null;

  if(cartItems){
    for(let i = 0; i < cartItems.length; i++){
      if(cartItems[i].title===name){
        item = cartItems[i];
        break;
      }
    }
  }

  return (
    item ? (
    <div className="qty-section">
      
      <button onClick={() => removeFromCart(item.title)}>-</button>
      <span className="qty-input-container">
        Qty: <input className="qty-input" onChange={(e) => setQty(item.title, e.target.value)} type="text" id={item.title} value={item.quantity}/>
      </span>
      <button onClick={() => addToCart(item.title)}>+</button>
    </div>) : ""
  );
}

export default QtyButtons;
