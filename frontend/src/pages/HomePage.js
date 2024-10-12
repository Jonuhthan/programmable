import React from 'react';
import { UserAuth } from '../context/AuthContext';
import HeaderHome from '../components/HeaderHome';

const HomePage = () => {
    const { user } = UserAuth();
    return (
        <div>
            <HeaderHome />
            Welcome, {user.displayName}
        </div>
    );
};

export default HomePage;