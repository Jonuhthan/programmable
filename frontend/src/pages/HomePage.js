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

// other endpoints
// const categories = [
//     { title: 'Java Foundations', description: 'Practice the foundational skills of Java', imageSrc: javaImage, uri: '/topics/java-foundations' },
//     { title: 'Python', description: 'Practice Python basics', imageSrc: pythonImage, uri: '/topics/python-basics' },
//     { title: 'mySQL', description: 'Practice mySQL basics', imageSrc: sqlImage, uri: '/topics/mysql-basics' },
//     { title: 'Data Structures & Algorithms', description: 'Master your DSA skills', imageSrc: dsaImage, uri: '/topics/dsa-skills' },
//     { title: 'JavaScript', description: 'Sharpen your JavaScript skills', imageSrc: jsImage, uri: '/topics/javascript-skills' },
//     { title: 'C++', description: 'Improve your C++ programming skills', imageSrc: cppImage, uri: '/topics/cpp-skills' },
//   ];

const HomePage = () => {
    const categories = [
        { title: 'Java Foundations', description: 'Practice the foundational skills of Java', imageSrc: javaImage, uri: '/topics/java-foundations' },
        { title: 'Python', description: 'Practice Python basics', imageSrc: pythonImage, uri: '#' },
        { title: 'mySQL', description: 'Practice mySQL basics', imageSrc: sqlImage, uri: '#' },
        { title: 'Data Structures & Algorithms', description: 'Master your DSA skills', imageSrc: dsaImage, uri: '#' },
        { title: 'JavaScript', description: 'Sharpen your JavaScript skills', imageSrc: jsImage, uri: '#' },
        { title: 'C++', description: 'Improve your C++ programming skills', imageSrc: cppImage, uri: '#' },
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
                        uri={category.uri}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;