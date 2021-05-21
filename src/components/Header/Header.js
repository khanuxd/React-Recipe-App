import React from 'react';
import Navigation from './Navigation';

import logo from '../../assests/logo.png';

import './Header.css';
import { Image } from 'react-bootstrap';

const Header = () => {

    return (
        <header className=" nav-top bg-light fixed-top">
            <div className="logo">
                <a href="/"><Image src={logo} alt="Recipe" /></a>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;