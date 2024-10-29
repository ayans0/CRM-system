import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate=useNavigate();
  return (
    <div className='welcome'>
        <h2>Welcome to CustomerCRM !</h2>
        <hr />
        <p>CustomerCRM provides a simple and user-friendly platform for managing customer information efficiently.</p>
    <button onClick={() => navigate("/customers")} >Go to the Customer List</button>
    </div>
  )
}
