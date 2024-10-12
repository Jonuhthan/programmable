import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="logo">Programmable</div>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="auth-buttons">
                        <SignIn />
                        <SignUp />
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;