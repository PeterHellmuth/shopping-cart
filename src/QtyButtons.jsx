function QtyButtons({ name, sortedCart, addToCart, removeFromCart }) {
  let item = null;

  for(let i = 0; i < sortedCart.length; i++){
    if(sortedCart[i].title===name){
      item = sortedCart[i];
      break;
    }
  }
  
  return (
    <div className="qty-section">
      <button onClick={() => removeFromCart(item.title)}>-</button>
      <span>Qty: {item.quantity}</span>
      <button onClick={() => addToCart(item.title)}>+</button>
    </div>
  );
}

export default QtyButtons;
