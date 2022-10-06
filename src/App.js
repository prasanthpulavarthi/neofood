import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from './components/LandingPage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ContactUs from './components/ContactUS';
import PopularItems from './components/PopularItems';
import Search from './components/Search';
import Login from './components/Login';
import { useSelector } from 'react-redux';

function App() {
  
  const authState = useSelector((state) => state.auth);
  // function PrivateRoute({children}){
  
  //   return authState && authState.isLoggedIn ?children :<Navigate to="/" />;
  // }


  return (
    <>
     <Router>
      <ToastContainer/>
        <NavigationBar />

        <Routes>
          {
            authState && authState.isLoggedIn ? (<Route path="/" element={<LandingPage />} />) : (<Route path="/" element={<Login/>}/>)
          }
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/menu" element={<PopularItems/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
