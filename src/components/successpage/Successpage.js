import React from 'react'
import { Link } from 'react-router-dom'

const Successpage = () => {
  return (
    <div className='p-5'>
      SuccessFully Created..!
      
      <button className="btn login-btn" >
            <Link className='text-light text-decoration-none' to="/">Back to Home</Link>
          </button>
    </div>
  )
}

export default Successpage