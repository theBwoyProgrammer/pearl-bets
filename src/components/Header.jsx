import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css'

const Header = () => {
    return (
        <header className="header">
            <nav className='nav'>
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Packages</li>
                </ul>
            </nav>
            
        </header>
    );
};

export default Header;
