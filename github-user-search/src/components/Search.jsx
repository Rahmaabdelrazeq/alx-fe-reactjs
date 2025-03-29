import { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = ({ setUsers, setLoading, setError }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const query = [];
      if (username) query.push(`${username} in:login`);
      if (location) query.push(`location:${location}`);
      if (repos) query.push(`repos:>${repos}`);

      const queryString = query.join("+");
      const results = await fetchUserData(queryString);
      setUsers(results);
    } catch (error) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <form onSubmit={handleSearch} className="grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Location (e.g., USA)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
