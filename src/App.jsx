import { Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css/animate.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Navbar from './header/Navbar'
import Footer from './footer/Footer';
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {!isHome && <Navbar />}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
