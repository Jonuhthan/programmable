import React from 'react';
import HeaderHome from '../components/HeaderHome';
import CategoryCard from '../components/CategoryCard';
import StreakBar from '../components/StreakBar';
import javaImage from '../assets/images/java.png';
import pythonImage from '../assets/images/python.png';
import sqlImage from '../assets/images/mySQL.png';
import dsaImage from '../assets/images/dsa.png';
import jsImage from '../assets/images/javascript.png';
import cppImage from '../assets/images/cpp.png';
import './HomePage.css';

const HomePage = () => {
    const categories = [
        { title: 'Java Foundations', description: 'Practice the foundational skills of Java', imageSrc: javaImage },
        { title: 'Python', description: 'Practice Python basics', imageSrc: pythonImage },
        { title: 'mySQL', description: 'Pratice mySQL basics', imageSrc: sqlImage },
        { title: 'Data Structures & Algorithms', description: 'Master your DSA skills', imageSrc: dsaImage },
        { title: 'JavaScript', description: 'Sharpen your JavaScript skills', imageSrc: jsImage },
        { title: 'C++', description: 'Improve your C++ programming skills', imageSrc: cppImage }
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