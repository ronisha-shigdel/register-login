import { useState, useEffect } from "react";

interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  const handleDelete = (email: string) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">
          Registered Users
        </h2>
        {users.length > 0 ? (
          <ul className="space-y-4">
            {users.map((user, index) => (
              <li key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-700">{user.name}</p>
                  <p className="text-gray-500">{user.email}</p>
                </div>
                <button
                  onClick={() => handleDelete(user.email)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No users registered yet.</p>
        )}
      </div>
    </div>
  );
}
