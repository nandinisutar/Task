import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => {
        setUser(data.results[0]);
      });
  }, []);

  if (!user) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex flex-col items-center">
          <img
            src={user.picture.large}
            alt="User Avatar"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">{user.name.first} {user.name.last}</h2>
          <p className="text-gray-600 mt-2">{user.email}</p>
          <div className="mt-4 w-full">
            <p className="text-gray-700">Location:</p>
            <p className="text-gray-600">{user.location.city}, {user.location.country}</p>
          </div>
          <div className="mt-4">
            <a
              href={`mailto:${user.email}`}
              className="text-blue-500 hover:underline"
            >
              Contact User
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
