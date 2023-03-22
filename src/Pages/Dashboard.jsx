import { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    axios.get('/api/userdata')
      .then(response => setUserData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="flex flex-col items-center">
      {userData && (
        <>
          <img src={userData.profilePicture} alt="Profile" className="w-20 h-20 rounded-full mb-4" />
          <h2 className="text-2xl font-bold">{userData.username}</h2>
          <p className="text-lg mb-4">{userData.hourTokens} Hour Tokens</p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Button 1
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              Button 2
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDashboard;
