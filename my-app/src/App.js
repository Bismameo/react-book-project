// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import AboutUs from './pages/aboutus';
import Books from './pages/books';
import Categories from './pages/categories';
import BestSellers from './pages/bestsellers';
import Service from './pages/service';
import Contact from './pages/contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './auth/login';
import Signup from './auth/signup';
// import SignUp from './auth/signup';
// import Login from './auth/login';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            {/* <Route path="/Signup" element={SignUp}/> */}
            {/* <Route path="/login" element={Login}/> */}
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/bestsellers" element={<BestSellers />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
