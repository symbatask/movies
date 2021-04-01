import React from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.png";

const Header = () => {
    return (
            <header className='app-header'>
                <Link to='/'>
                    <img src={logo} alt=""/>
                </Link>
            </header>
    );
};

export default Header;