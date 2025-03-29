import { useState } from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import { fetchUsers } from "./services/githubService";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (username, location, minRepos) => {
        setLoading(true);
        setError(false);
        setUsers([]);

        const userData = await fetchUsers(username, location, minRepos);
        setLoading(false);

        if (userData) {
            setUsers(userData);
        } else {
            setError(true);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
            <Search onSearch={handleSearch} />
            {loading && <p className="text-gray-500 mt-4">Loading...</p>}
            {error && <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default App;
