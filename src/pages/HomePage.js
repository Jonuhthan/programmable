import React from 'react';
import Header from './../components/Header';
import { UserAuth } from '../context/AuthContext';
import './HomePage.css';

const HomePage = () => {
    const { user } = UserAuth();
    return (
        <div>
            <Header />
            Welcome, {user.displayName}
        </div>
    );
};

export default HomePage;