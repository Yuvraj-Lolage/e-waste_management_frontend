import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar/navbar';
import Homepage from "./components/homepage/Homepage";
import EwasteForm from "./components/ewasteform/EwasteForm";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Successpage from "./components/successpage/Successpage";
import Allrequests from "./components/allrequests/Allrequests";
import MyRequests from "./components/myrequests/MyRequests";
import OwnedEwaste from "./components/ownedEwaste/OwnedEwaste";
import AboutUs from "./components/aboutus/AboutUs";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={ <Homepage/> }/>
        <Route path='/aboutus' element={ <AboutUs/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/signup' element={ <Signup/> }/>
        <Route path='/ewasteRequest' element={ <EwasteForm/> }/>
        <Route path='/successMessage' element={ <Successpage/> }/>
        <Route path='/successBuyMessage' element={ <Successpage/> }/>
        <Route path='/viewRequests' element={ <Allrequests/> }/>
        <Route path='/myRequests' element={ <MyRequests/> }/>
        <Route path='/ownedEwaste' element={ <OwnedEwaste/> }/>
      </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
