import axios from 'axios';
import javaFundamentalsData from './data/java_fundamentals.json';

const API_BASE_URL = 'http://127.0.0.1:5000'; // Flask backend URL

export const fetchRecommendations = async (userId, topic) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/questions/recommend`, {
            params: { user_id: userId, topic: topic }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching recommendations:", error);
        throw error; // Rethrow the error for handling in the calling component
    }
};

export const fetchJavaFundamentalsQuestions = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(javaFundamentalsData.questions);
        }, 1000); // Simulating a network delay
    });
};
