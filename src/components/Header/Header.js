import React from 'react';
import Navigation from './Navigation';

import './Header.css';

const Header = () => {

    return (
        <header className=" nav-top bg-light fixed-top">
            <Navigation />
        </header>
    );
};

export default Header;