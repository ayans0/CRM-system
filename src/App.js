import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Privacy } from './components/Privacy';
import { Contact } from './components/Contact';
import { Customers } from './components/Customers';
import { NewCustomer } from './components/NewCustomer';
import { CustomerProvider } from './components/CustomerContext';

function App() {
  return (
    <BrowserRouter> {/* Place BrowserRouter here */}
      <CustomerProvider> {/* CustomerProvider is inside BrowserRouter */}
        <div className="App">
          <Header/>
          <Routes>
            <Route path='/' index element={<Home/>}/>
            <Route path='/contactus' element={<Contact/>}/>
            <Route path='/customers' element={<Customers/>}/>
            <Route path='/newcustomer' element={<NewCustomer/>}/>
          </Routes>
        </div>
      </CustomerProvider>
    </BrowserRouter>
  );
}

export default App;
