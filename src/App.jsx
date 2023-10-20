
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{ 
      fetch('https://fakestoreapi.com/products/')
      .then(res=>res.json())
      .then(
          (result)=>{
          setItems(result);
          }
      )
  }, [])


  function addToCart(name){
    let newCartItems = cartItems.map((item) => item);
    for(let i=0; i < items.length; i++){
      if(items[i].title === name){
        newCartItems.push(items[i]);
      }
    }
    setCartItems(newCartItems);
  }

  function removeFromCart(name){
    let newCartItems = cartItems.map((item) => item);
    for(let i = 0; i < newCartItems.length; i++){
      if(newCartItems[i].title === name){
        newCartItems.splice(i, 1);
        break;
      }
    }
    setCartItems(newCartItems);
  }

  let sortedCart = [];
  for(let i = 0; i < cartItems.length; i++){
      let exists = false;
      let existingIndex = null;
      for(let j = 0; j< sortedCart.length; j++){
          if(sortedCart[j].title === cartItems[i].title){
              exists = true;
              existingIndex = j;

              break;
          }
      }
   
      if(exists){
          sortedCart[existingIndex].quantity += 1;
      } else{
          sortedCart.push({title: cartItems[i].title, price: cartItems[i].price, image: cartItems[i].image, quantity: 1});
      }
  }



  return (
    <>
      <NavBar cartItems={cartItems}/>
      <Outlet context={[items, sortedCart, removeFromCart, addToCart]}/>
    </>
  )
}

export default App
