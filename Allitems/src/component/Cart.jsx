import React, { useEffect } from 'react'

import {useState} from 'react';
import { cartcontext } from '../App';

import './Cartcss.css'
import { useContext } from 'react';

export const Cart = () => {

  const {cart,setcart}=useContext(cartcontext)

    const [total,settotal]=useState(0);

    useEffect(()=>
    {
       settotal(cart.reduce((acc,curr)=> acc+parseInt(curr.amt),0))
    },[cart])
     
  return (
    <>
    <h3>Cart products</h3>
    <div className='cartcontainer'>
     

      {
          cart.map((product)=>(
            <div className='cart-product' key={product.id}>
            <div className='productimg'>
          <img src={product.pic}></img>
          </div>
        <div className='productdetails'>
          <h3>{product.name}</h3>
          <p>price Rs:{product.amt}</p>
        </div>
      </div>
            
          ))
        }
        
      
        
  </div>
    <h3>Total Price Rs:{total}</h3>
    </>
  )
}
