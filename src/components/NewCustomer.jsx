import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useCustomerContext } from './CustomerContext';

export const NewCustomer = () => {
    const navigate = useNavigate();
    const { addCustomer } = useCustomerContext();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addCustomer({ name, email, phone, address, age });
        navigate("/customers"); 
    };

    return (
        <div className="add-customer-form">
            <h2>Add New Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" required />
                </label>
                <label>
                    Phone:
                    <input onChange={(e) => setPhone(e.target.value)} value={phone} type="tel" name="phone" required />
                </label>
                <label>
                    Address:
                    <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" name="address" required />
                </label>
                <label>
                    Birth Date:
                    <input onChange={(e) => setAge(e.target.value)} value={age} type="date" name="age" required />
                </label>
                <div className="button-group">
                    <button type="submit" className="add-button">Add</button>
                    <button type="button" className="go-back-button" onClick={() => navigate("/customers")}>Go Back</button>
                </div>
            </form>
        </div>
    );
};
