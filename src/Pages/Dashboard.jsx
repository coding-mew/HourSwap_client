import { useNavigate } from "react-router-dom";
import { useStore } from "../context/store";

const UserDashboard = () => {
  const { user } = useStore();
  console.log(user)
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <img
        src={user.profilePicture}
        alt="Profile"
        className="w-20 h-20 rounded-full mb-4"
      />
      <h2 className="text-2xl font-bold">Hello {user.firstName}</h2>
      <p className="text-lg mb-4">
        You currently own {user.hourTokens} Hour Tokens
      </p>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={(event) => {
            // event.preventDefault();
            console.log("trying to navigate")
            navigate("/createtask");
          }}
        >
          Create A Task
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={(event) => {
            // event.preventDefault();
            navigate("/searchcatalogue");
          }}
        >
          Search Catalogue
        </button>
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          onClick={(event) => {
            // event.preventDefault();
            console.log("trying to send token")
            navigate("/sendtoken");
          }}
        >
          Send Token
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          onClick={(event) => {
            // event.preventDefault();
            console.log("trying to buy token")
            navigate("/buytoken");
          }}
        >
          Buy Token
        </button>
      </div>
    </div>
  );
        }

export default UserDashboard;
