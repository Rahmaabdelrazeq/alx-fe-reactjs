import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { fetchGitHubUser } from './services/githubService';

function App() {
    const [user, setUser] = useState(null);

    const handleSearch = async (username) => {
        const userData = await fetchGitHubUser(username);
        setUser(userData);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
            <SearchBar onSearch={handleSearch} />
            {user && <UserCard user={user} />}
        </div>
    );
}

export default App;

import { useState } from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import { fetchUserData } from "./services/githubService";

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (username) => {
        setLoading(true);
        setError(false);
        setUser(null);

        const userData = await fetchUserData(username);
        setLoading(false);

        if (userData) {
            setUser(userData);
        } else {
            setError(true);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
            <Search onSearch={handleSearch} />
            {loading && <p className="text-gray-500 mt-4">Loading...</p>}
            {error && <p className="text-red-500 mt-4">Looks like we can't find the user.</p>}
            {user && <UserCard user={user} />}
        </div>
    );
}

