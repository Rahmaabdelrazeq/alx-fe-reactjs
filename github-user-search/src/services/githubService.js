import axios from "axios";

const GITHUB_SEARCH_API = "https://api.github.com/search/users";

export const fetchUsers = async (username, location, minRepos, page = 1) => {
    try {
        let query = `q=${username}`;
        if (location) query += `+location:${location}`;
        if (minRepos) query += `+repos:>${minRepos}`;

        const response = await axios.get(`${GITHUB_SEARCH_API}?${query}&page=${page}&per_page=10`);
        return response.data.items; 
    } catch (error) {
        console.error("Error fetching users:", error);
        return null; 
    }
};
