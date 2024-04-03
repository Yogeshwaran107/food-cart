import React, { useContext } from 'react'
import { cartcontext } from '../App';
import './Productcss.css';


 

export const Product = ({product}) => {

  const {cart,setcart}=useContext(cartcontext);

  const name=product.name.length>10?product.name.substring(0,10)+".." : product.name;

   const addcart =()=> {
       setcart([...cart,product])
       
   };

   const removecart=()=>{
        setcart(cart.filter((c)=> c.id !==product.id));
        
        
   };
   console.log(cart);

  return (


    <div className='productclass'>

        <div className='img'>
        <img src={product.pic} /> 
        </div>
        <div className='details'>
        <h3>{name}</h3>
        <p>price:{product.amt}</p>
        {cart.includes(product)?<button onClick={removecart} className='removebtn'>Remove from cart</button>
        :<button onClick={addcart}>Add to cart</button>}
        
        </div>
       
        
        
        </div>
  )
}
