const Results = ({ users, loading, error }) => {
    if (loading) return <p className="text-center text-gray-400">Loading...</p>;
    if (error) return <p className="text-red-500 text-center">{error}</p>;
    if (!users.length) return <p className="text-center text-gray-400">No results found.</p>;
  
    return (
      <div className="grid gap-4 md:grid-cols-3 p-4">
        {users.map((user) => (
          <div key={user.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mx-auto" />
            <h2 className="text-white text-center mt-2">{user.login}</h2>
            <p className="text-gray-400 text-center">
              {user.location || "Location not available"}
            </p>
            <p className="text-gray-400 text-center">Repos: {user.public_repos || "N/A"}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-blue-400 hover:underline mt-2"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  export default Results;
  