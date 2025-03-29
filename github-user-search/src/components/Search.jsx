import { useState } from "react";

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onSearch(username);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <input
                type="text"
                placeholder="Enter GitHub username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 rounded-md w-80"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Search
            </button>
        </form>
    );
};
import { useState } from "react";

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(username, location, minRepos);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
            <input
                type="text"
                placeholder="Enter GitHub username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 rounded-md w-full"
            />
            <input
                type="text"
                placeholder="Enter location (optional)..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border p-2 rounded-md w-full"
            />
            <input
                type="number"
                placeholder="Min Repositories (optional)..."
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
                className="border p-2 rounded-md w-full"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                Search
            </button>
        </form>
    );
};



export default Search;

