import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

export const fetchGitHubUser = async (username) => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};
import axios from "axios";

const GITHUB_SEARCH_API = "https://api.github.com/search/users";

export const fetchUsers = async (username, location, minRepos) => {
    try {
        let query = `q=${username}`;
        if (location) query += `+location:${location}`;
        if (minRepos) query += `+repos:>${minRepos}`;

        const response = await axios.get(`${GITHUB_SEARCH_API}?${query}`);
        return response.data.items; 
    } catch (error) {
        console.error("Error fetching users:", error);
        return null; 
    }
};


