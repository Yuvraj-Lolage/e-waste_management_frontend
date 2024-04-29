import axios from "axios";
import "./signup.css";

import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:5000/users/signup', { name, email, password })
        .then(() => {
          // history.push('/login');
          console.log(`working ${name}  ${email} ${password}  ${confirmPassword}`);
        })
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="container">
      <div className="signup-container">
        <h2 className="signup-heading">Sign Up</h2>
        {/* <img src="https://via.placeholder.com/600x300" alt="Signup Image" className="signup-image"/> */}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <input type="text" className="form-control" id="name" placeholder="Enter your name"
              onInput={(event) => { setName(event.target.value) }}
            />
          </div>
          <div className="form-group mb-2">
            <input type="email" className="form-control" id="email" placeholder="Enter your email"
              onInput={(event) => { setEmail(event.target.value) }} />
          </div>
          <div className="form-group mb-2">
            <input type="password" className="form-control" id="password" placeholder="Enter your password"
              onInput={(event) => { setPassword(event.target.value) }} />
          </div>
          <div className="form-group mb-2">
            <input type="password" className="form-control" id="password" placeholder="Confirm password"
              onInput={(event) => { setConfirmPassword(event.target.value) }} />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        </form>
      </div>
    </div>

  )
}

export default Signup
