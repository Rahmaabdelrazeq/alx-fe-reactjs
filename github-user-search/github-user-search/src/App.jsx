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
