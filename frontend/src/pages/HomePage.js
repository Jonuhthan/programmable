import React from 'react';
import HeaderHome from '../components/HeaderHome';
import CategoryCard from '../components/CategoryCard';
import StreakBar from '../components/StreakBar';
import javaImage from '../assets/images/java.png';
import pythonImage from '../assets/images/python.png';
import sqlImage from '../assets/images/mySQL.png';
import './HomePage.css';

const HomePage = () => {
    const categories = [
        { title: 'Java Foundations', description: 'Practice the foundational skills of Java', imageSrc: javaImage },
        { title: 'Python', description: 'Practice Python basics', imageSrc: pythonImage },
        { title: 'mySQL', description: 'Pratice mySQL basics', imageSrc: sqlImage },
      ];

    return (
        <div className="home-page">
            <HeaderHome />
            <StreakBar />
            <div className="category-container">
                {categories.map((category, index) => (
                    <CategoryCard
                        key={index}
                        title={category.title}
                        description={category.description}
                        imageSrc={category.imageSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;