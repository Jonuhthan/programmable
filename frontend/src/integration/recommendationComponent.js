
import React, { useEffect, useState } from 'react';
import { fetchRecommendations } from '../api';

const RecommendationComponent = () => {
    const [recommendation, setRecommendation] = useState(null);
    const userId = 1; // Replace with actual logic to get the logged-in user ID
    const topic = 'math'; // Replace with the desired topic

    useEffect(() => {
        const getRecommendations = async () => {
            try {
                const data = await fetchRecommendations(userId, topic);
                setRecommendation(data);
            } catch (error) {
                console.error("Failed to fetch recommendations:", error);
            }
        };

        getRecommendations();
    }, [userId, topic]);

    return (
        <div>
            <h1>Recommended Question</h1>
            {recommendation ? (
                <div>
                    <p>{recommendation.question}</p>
                    <ul>
                        {recommendation.choices.map((choice, index) => (
                            <li key={index}>{choice}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RecommendationComponent;
