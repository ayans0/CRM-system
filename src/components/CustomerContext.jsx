import React, { createContext, useState, useContext } from 'react';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
    const [customerData, setCustomerData] = useState([]);

   
    const addCustomer = (customer) => {
        setCustomerData((prevData) => [...prevData, customer]);
    };

    return (
        <CustomerContext.Provider value={{ customerData, addCustomer }}>
            {children}
        </CustomerContext.Provider>
    );
};

export const useCustomerContext = () => useContext(CustomerContext);
