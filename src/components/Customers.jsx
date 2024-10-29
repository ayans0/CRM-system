import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useCustomerContext } from './CustomerContext';

export const Customers = () => {
    const navigate = useNavigate();
    const { customerData } = useCustomerContext();

    return (
        <div className="customers">
            <div className="h2_and_button">
                <h2>Customer List</h2>
                <button onClick={() => navigate("/newcustomer")}>Add Customer</button>
            </div>
            <table className="customer-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Birth Date</th>
                    </tr>
                </thead>
                <tbody>
                    {customerData.map((info, index) => (
                        <tr key={index}>
                            <td>{info.name}</td>
                            <td>{info.email}</td>
                            <td>{info.phone}</td>
                            <td>{info.address}</td>
                            <td>{info.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
