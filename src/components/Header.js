import React from 'react';
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
                        <button className="sign-in">Sign In</button>
                        <button className="sign-up">Sign Up</button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;