import React from 'react';
import { UserAuth } from '../context/AuthContext';
import Header from '../components/Header';

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