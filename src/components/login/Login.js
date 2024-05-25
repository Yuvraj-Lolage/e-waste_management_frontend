import React, { Fragment, useState } from 'react'
import "./login.css"

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigator = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);


    const handleFormSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // Here you can access the email and password state variables
        try {
            await axios.post('http://localhost:5000/users/login', { email, password })
                .then((response) => {

                    if (response.data.msg !== "User is not present") {
                        console.log(response);
                        localStorage.setItem('token', response.data);
                        // const token = localStorage.getItem('token');
                        window.location.reload();
                        navigator(-1);
                    } else {
                        console.log("Invalid user");
                        setAlert(true);
                    }
                })




        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            {alert && <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Important Note: </strong> Invalid User
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=> setAlert(false)}></button>
            </div>}
            <div class="container-main">

                <div className='login-container'>
                    <h1 class="text-center mb-5">Login</h1>
                    <form onSubmit={handleFormSubmit}>
                        <div class="form-group my-2">
                            {/* <label for="email">Email address</label> */}
                            <input type="email" class="form-control" id="email" placeholder="Enter email"
                                onInput={(event) => { setEmail(event.target.value) }} />
                        </div>
                        <div class="form-group my-2">
                            {/* <label for="password">Password</label> */}
                            <input type="password" class="form-control" id="password" placeholder="Password"
                                onInput={(event) => { setPassword(event.target.value) }} />
                        </div>
                        <div className='forgot-passoword text-center'>
                            <a href='#'>Forget password?</a>
                        </div>
                        <div className='text-center my-3'>
                            <button type="submit" class="btn" id='login-btn'>Login</button>
                        </div>
                        <div className='signup-link text-center'>
                            <h6>Don't have an account? <span><Link to='/signup'>Sign up</Link></span></h6>
                        </div>

                        <h6 className='text-center'>-OR-</h6>
                        <div className='login-options'>
                            <div className='facebook'>
                                <button className='btn facebook-btn'>Continue with Facebook</button>
                            </div>
                            <div className='google'>
                                <button className='btn google-btn'>Continue with Google</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </>


    )
}

export default Login
