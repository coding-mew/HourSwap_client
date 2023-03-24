import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchCatalogue = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useState({
    topic: '',
    type: '',
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const BE_URL = import.meta.env.VITE_BE_PORT;
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      '$1'
    );

    try {
      const response = await axios.get(
        `${BE_URL}/tasks/searchcatalogue?topic=${searchParams.topic}&type=${searchParams.type}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleContact = async (userId) => {
    const BE_URL = import.meta.env.VITE_BE_PORT;
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      '$1'
    );

    try {
      const response = await axios.get(`${BE_URL}/users/${userId}/contact`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      // Display the contact information to the user
      alert(`Contact ${response.data.email} to apply for this task`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setSearchParams({
      ...searchParams,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl mb-4">Search Catalogue</h1>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <select
          className="border border-gray-300 p-2"
          name="topic"
          value={searchParams.topic}
          onChange={handleChange}
        >
          <option value="">All Topics</option>
          <option value="cleaning">Cleaning</option>
          <option value="cooking">Cooking</option>
          <option value="gardening">Gardening</option>
          <option value="teaching">Teaching</option>
          <option value="transportation">Transportation</option>
          <option value="other">Other</option>
        </select>
        <select
          className="border border-gray-300 p-2"
          name="type"
          value={searchParams.type}
          onChange={handleChange}
        >
          <option value="">All Types</option>
          <option value="request">Request</option>
          <option value="offer">Offer</option>
        </select>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <ul>
        {searchResults.map((task) => (
          <li key={task._id} className="border-b border-gray-200 py-2">
           
           <h2 className="text-lg font-semibold">{task.topic}</h2>
            <p>Type: {task.type}</p>
            <p>Description: {task.description}</p>
            <p>Value token: {task.valueToken}</p>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-4"
              onClick={() => handleContact(task.created_by)}
            >
              Contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchCatalogue;