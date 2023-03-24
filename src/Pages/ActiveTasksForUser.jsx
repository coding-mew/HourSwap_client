import { useEffect, useState } from "react";
import axios from "axios";

const ActiveTasksForActiveUser = ({ userId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const BE_URL = import.meta.env.VITE_BE_PORT;

    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${BE_URL}/tasks/getTasksForUser/${userId}`);
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, [userId]);

  return (
    <>
      {tasks.length === 0 && <div>No tasks to show</div>}
      {tasks.length > 0 && (
        <div>
          <h1>Active Tasks</h1>
          {tasks.map((task) => (
            <div key={task._id.$oid}>
              {task.topic} - {task.description}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ActiveTasksForActiveUser;
