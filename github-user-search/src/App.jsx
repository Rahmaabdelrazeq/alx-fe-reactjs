import { useState } from "react";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold">GitHub User Search</h1>
      <Search setUsers={setUsers} setLoading={setLoading} setError={setError} />
      <Results users={users} loading={loading} error={error} />
    </div>
  );
}

export default App;
