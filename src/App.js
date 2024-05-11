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


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={ <Homepage/> }/>
        <Route path='/about' element={ <div>About us Page</div> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/signup' element={ <Signup/> }/>
        <Route path='/ewasteRequest' element={ <EwasteForm/> }/>
        <Route path='/successMessage' element={ <Successpage/> }/>
        <Route path='/viewRequests' element={ <Allrequests/> }/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
