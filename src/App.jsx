
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState(null);

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
    let exists = false;
    let newCartItems = [];
    if(cartItems){
      newCartItems = cartItems.map((item) => item);
      for(let i=0; i < newCartItems.length; i++){
        if(newCartItems[i].title === name){
          newCartItems[i].quantity += 1;
          exists = true;
          break;
        }
      }
    }

    if(!exists){
      let newItem = findItem(name);
      newCartItems.push({title: newItem.title, price: newItem.price, image: newItem.image, quantity: 1});
    }

    setCartItems(newCartItems);
  }

  function removeFromCart(name){

    let newCartItems = [];
    if(cartItems){
      newCartItems = cartItems.map((item) => item);
      for(let i=0; i < newCartItems.length; i++){
        if(newCartItems[i].title === name){
          newCartItems[i].quantity -= 1;
          if(newCartItems[i].quantity <= 0){
            newCartItems.splice(i,1);
          }
          break;
        }
      }
    }

    setCartItems(newCartItems);
  }

  function findItem(name){
    for(let i = 0; i < items.length;i++){
      if(items[i].title === name){
        return items[i];
      }
    }
  }

  function setQty(name, qty){
    let newCartItems = cartItems.map((item) => item);
    for(let i = 0; i < newCartItems.length; i++){
      if(newCartItems[i].title === name){
        if(qty > 0){
          newCartItems[i].quantity = Number(qty);
        } else{
          newCartItems.splice(i, 1);
        }
        break;
      }
    }
    setCartItems(newCartItems);
  }


  let totalCartItems = 0;
  if(cartItems){
    for(let i = 0; i< cartItems.length;i++){
      totalCartItems += Number(cartItems[i].quantity);
    }
  }




  return (
    <>
      <NavBar totalCartItems={totalCartItems}/>
      <Outlet context={[items, cartItems, removeFromCart, addToCart, setQty]}/>
    </>
  )
}


export default App
