import React from 'react';
import './LandingPage.css';
import Header from '../components/header/Header';
import Start from '../components/start/Start';

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <Header />
            <section className="hero">
                <div className="typewriter">
                    <h1>Programmable</h1>
                </div>
                <p>Learn, build, and develop your computer science fundamentals.</p>
                <Start />
            </section>

            <section id="about">
                <h2>About</h2>
            </section>

            <section id="features">
                <h2>Features</h2>
            </section>

            <section id="contact">
                <h2>Contact</h2>
            </section>
            {/* add footer component here */}
        </div>
    );
};

export default LandingPage;