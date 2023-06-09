import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

const CreateTask = () => {
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    topic: "",
    type: "",
    description: "",
    valueToken: 0,
    created_by: "",
  });

  const [showModal, setShowModal] = useState(false); 


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const BE_URL = import.meta.env.VITE_BE_PORT;
      const res = await axios.post(
        `${BE_URL}/tasks/createTask`,
        formData,
        {
          withCredentials: true,
        }
      );
      console.log("task saved", res.data);
      setShowModal(true); // display modal upon success
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create a new task
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="topic"
                className="block text-sm font-medium text-gray-700"
              >
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                onChange={handleChange}
                value={formData.topic}
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="" disabled>
                  Select a topic
                </option>
                {[
                  "cleaning",
                  "cooking",
                  "gardening",
                  "teaching",
                  "transportation",
                  "other",
                ].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Type
              </label>
              <select
                id="type"
                name="type"
                onChange={handleChange}
                value={formData.type}
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="" disabled>
                  Select a type
                </option>
                {["request", "offer"].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                onChange={handleChange}
                value={formData.description}
                required
                rows="3"
                className="mt-1 block w-full shadow-sm focus
      outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="valueToken"
                className="block text-sm font-medium text-gray-700"
              >
                Value Token
              </label>
              <input
                id="valueToken"
                name="valueToken"
                type="number"
                onChange={handleChange}
                value={formData.valueToken}
                min="0"
                max="10"
                className="mt-1 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
            </div>

            <div className="hidden">
              <input
                type="text"
                name="created_by"
                value={formData.created_by}
                readOnly
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="bg-white rounded-lg px-4 py-6">
            <h3 className="text-lg font-medium mb-4">
              Task created successfully!
            </h3>
            <p>Topic: {formData.topic}</p>
            <p>Type: {formData.type}</p>
            <p>Description: {formData.description}</p>
            <p>Value Token: {formData.valueToken}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CreateTask;
