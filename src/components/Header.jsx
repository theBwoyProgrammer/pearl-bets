import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css';
import Home from './Home';
import About from './About';
import Services from './Services';

const Header = () => {
    return (
    <header className="header">
        
        <nav className='nav'>
        <h1>Hello</h1>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/services" activeClassName="active">Packages</NavLink>
            
       </nav>
            
    </header>
    );
};

export default Header;
