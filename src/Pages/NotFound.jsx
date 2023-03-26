import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="text-xl text-gray-700">Page not found</p>
     
      <button
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
        onClick={() => navigate('/')}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default NotFound;
