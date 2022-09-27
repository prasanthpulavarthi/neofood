import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import LandingPage from './components/LandingPage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ContactUs from './components/ContactUS';
import PopularItems from './components/PopularItems';
function App() {
  return (
    <>
     <Router>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/menu" element={<PopularItems/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
