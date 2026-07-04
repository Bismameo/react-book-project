import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './component/navbar';
import Carousel from './component/carousel';
import Cards from './component/cards';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import AboutUs from './pages/aboutus';
// import Service from './pages/service';
// import Home from './pages/Home';
import Footer from './component/footer';

function App() {
  return (
    // <BrowserRouter>
       <div className="App">
       <div> 
      <Navbar />
      <Carousel />

      <br/>
      <h1>Product </h1>
      <Cards />
      </div>
    <Footer/>
    </div>
  );
}




   
    //  {<Link to="/">Home</Link>
    // <Link to="/aboutus">AboutUs</Link>
    // <Link to="/service">Service</Link>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/aboutus" element={<AboutUs />} />
    //     <Route path="/service" element={<Service />} />
    //   </Routes>
    // </BrowserRouter> }
 
  
    
    export default App;