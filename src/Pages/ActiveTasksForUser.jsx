import { useEffect, useState } from "react";
import axios from "axios";

const ActiveTasksForActiveUser = ({ userId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const BE_URL = import.meta.env.VITE_BE_PORT;
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      '$1'
    );

    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${BE_URL}/tasks/getTasksForUser/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true});

        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, [userId]);

  return (
    <>
    {tasks.length === 0 && (
      <div className="text-center text-gray-500">No tasks to show</div>
    )}
    {tasks.length > 0 && (
      <div>
        <h1 className="text-2xl font-bold mb-4">Active Tasks</h1>
        {tasks.map((task) => (
          <div
            key={task._id.$oid}
            className="border rounded-lg p-4 mb-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-bold">{task.topic}</h2>
              <p className="text-gray-500">{task.description}</p>
            </div>
            <div>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </>
  
  );
};

export default ActiveTasksForActiveUser;
