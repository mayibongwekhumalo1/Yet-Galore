import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Her from './Pages/Her';
import Him from './Pages/Him';
import NewCollection from './Pages/NewCollection';
// import Collections from './Pages/Collections';
import Shop from './Pages/Shop';
import Login from './Pages/Login';
import Cart from './Pages/Cart';  
import Footer from './Components/Footer/Footer';








function App() {
  return (
    
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/her" element={<Her />} />
        <Route path="/him" element={<Him />} />
        <Route path="/new-collection" element={<NewCollection />} />
        {/* <Route path="/collections" element={<Collections />} /> */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;