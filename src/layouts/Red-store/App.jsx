import { useState } from 'react';
// imporint css files
import "assets/css/App.css"; 
import "assets/css/global.css"; 
//importing views
import Home from '../../views/Home.jsx';
import Footer from '../../components/footer.jsx';
import StoreNavbar from '../../components/navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from '../../views/Products.jsx';
import Account from '../../views/Account.jsx';
import Profile from '../../views/Profile.jsx';
import UserName from '../../components/username.jsx';
import SingleProduct from 'views/SingleProduct.jsx';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StoreNavbar />
      <br></br>
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:product_id" element={<SingleProduct />} />
        <Route path="/account" element={<Account />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Footer />
      </>
    
  );
}

export default App;