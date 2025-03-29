const UserCard = ({ user }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md flex flex-col items-center bg-white">
            <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full" />
            <h2 className="text-lg font-bold mt-2">{user.name || user.login}</h2>
            <p className="text-gray-500">@{user.login}</p>
            {user.location && <p className="text-gray-600">📍 {user.location}</p>}
            <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2"
            >
                View Profile
            </a>
        </div>
    );
};

export default UserCard;
