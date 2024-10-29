import React from 'react'
import './style.css'

export const Contact = () => {
  return (
    <div>
     <form class="contact-form">
    <h2>Contact Us</h2>
    <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>
    </div>
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
    </div>
    <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit" class="submit-button">Submit</button>
</form>

    </div>
  )
}

