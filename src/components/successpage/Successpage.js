import React from 'react'
import { Link } from 'react-router-dom'

import './successpage.css';
import successMsg from '../../assets/Success-msg.png';

const Successpage = () => {
  return (
    <div class="container" id='custom-container'>
        <div class="card p-3" id='custom-card'>
            <img src={ successMsg } class="img-fluid" alt="..." width="100"/>
            <div class="card-body text-center">
                <Link to="/"class="btn btn-primary">Go to Home page</Link>
            </div>
        </div>
    </div>

  )
}

export default Successpage