import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductTab from "./pages/ProductTab";
import Register from './pages/Register'
import Pay from './pages/Pay'

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user=useSelector(state=>state.user.currentUser);
  return <div>
    {/* <Home/> */}
    {/* <ProductList /> */}

    {/* <ProductTab /> */}

    {/* <Register /> */}
    {/* <Login /> */}
    {/* <Cart /> */}

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/login" element={user?(<Navigate replace to="/"/>):(<Login />)} />
        
        <Route path="/products/:category" element={<ProductList />} />
        <Route  path="/product/:id" element={<ProductTab />} />
        <Route  path="/cart" element={<Cart />} />
        <Route  path="/register" element={<Register />} />
        <Route exact path="/pay" element={<Pay />} />
        
        <Route exact path="/success" element={<Success />} />
      </Routes>
    </Router>


  </div>;
};

export default App;