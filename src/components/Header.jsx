import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <>
    <div className='header'>
        <h2>CustomerCRM</h2>
        <ul>
            <li><Link className='link' to='/'>Home</Link></li>
            <li><Link className='link' to='/customers'>Customers</Link></li>
            <li><Link className='link' to='/contactus'>Contact Us</Link></li>
            
        </ul>
       
    </div>
    <li className='hidden'><Link className='link' to='/newcustomer'>NewCustomer</Link></li>
    </>

  )
}
