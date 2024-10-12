import React from 'react';
import SignIn from './SignIn';
import { UserAuth } from '../context/AuthContext';
import './Header.css';
import SignOut from './SignOut';

const Header = () => {
    const { user, logOut} = UserAuth();

    return (
        <div>
            <header>
                <nav>
                    <div className="logo"><a href="/">Programmable</a></div>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="auth-buttons">
                        {user?.displayName ? (
                            <SignOut />
                        ) : (
                            <SignIn />
                        )}
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;