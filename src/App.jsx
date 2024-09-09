import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'; 
import Cart from './pages/Cart/Cart'; 
import Footer from './componenets/Footer/Footer'
import Navbar from './componenets/Navbar/Navbar';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import AppDownload from './componenets/AppDownload/AppDownload';
import ExploreMenu from './componenets/ExploreMenu/ExploreMenu';

function App() {
  return (
    <>
    <div className="m-0 p-0 box-border min-h-lvh no-underline text-inherit ">
       <div className='w-4/5 mx-auto'>
       <Navbar />
 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mobile-app" element={<AppDownload />} />
        <Route path="/menu" element={<ExploreMenu />} />
        
  
      </Routes>
  
    </div>
    <Footer/>
    </div>
    
    </>
  );
}

export default App;
