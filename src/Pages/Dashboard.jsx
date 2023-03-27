import { useNavigate } from "react-router-dom";
import { useStore } from "../context/store";
import ActiveTasksForActiveUser from "./ActiveTasksForUser";

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
      <h2 className="text-2xl font-bold">Hello {user.firstName} {user.lastName}</h2>
      <p className="text-lg mb-4">
        You currently own {user.hourTokens} Hour Tokens
      </p>
      <div className="flex space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white px-4 py-2 rounded"
          onClick={(event) => {
            // event.preventDefault();
            console.log("trying to navigate")
            navigate("/createtask");
          }}
        >
          Create A Task
        </button>
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white px-4 py-2 rounded"
          onClick={(event) => {
            // event.preventDefault();
            navigate("/searchcatalogue");
          }}
        >
          Search Catalogue
        </button>
        {/* <button
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white px-4 py-2 rounded"
          onClick={(event) => {
            // event.preventDefault();
            navigate("/gettasksforuser");
          }}
        >
         See active Tasks
        </button> */}
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white px-4 py-2 rounded"
          onClick={(event) => {
            // event.preventDefault();
            console.log(user)
            navigate("/sendtoken");
          }}
        >
          Send Token
        </button>
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white px-4 py-2 rounded"
          onClick={(event) => {
            // event.preventDefault();
            navigate("/buytoken");
          }}
        >
          Buy Token
        </button>
      </div>
      <ActiveTasksForActiveUser userId={user._id}/>
    </div>
  );
        }

export default UserDashboard;
