import React from 'react';
import SignIn from '../signInOut/SignIn';
import { UserAuth } from '../../context/AuthContext';
import './Header.css';
import SignOut from '../signInOut/SignOut';

const HeaderHome = () => {
    const { user } = UserAuth();

    return (
        <div>
            <header>
                <nav>
                    <div className="logo"><a href="/">Programmable</a></div>
                    <div className="welcome">
                        Welcome back, {user.displayName} 👋
                    </div>
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

export default HeaderHome;