
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import {useState,createContext} from 'react';
import {Header} from './component/Header'
import {Home} from './component/Home'
import {Cart} from './component/Cart'
import './App.css';

export const cartcontext=createContext();


function App() {
  
  const [cart,setcart]=useState([]);

  return (
    <>
    <cartcontext.Provider value={{cart,setcart}}>

    <BrowserRouter>
    <Header cart={cart.length}/>
    <div className="container">
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/cart"  element={<Cart/>} /> 
       </Routes>
    </div>
  
   </BrowserRouter>


    </cartcontext.Provider>
    
    </>
    
    
  )
}

export default App;
