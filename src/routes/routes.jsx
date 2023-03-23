import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Impressum from "../Pages/Impressum";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
    id: 1,
  },
  {
    path: "/signin",
    element: <SignIn />,
    id: 2,
  },
  {
    path: "/signup",
    element: <SignUp/>,
    id: 3,
  },
  { path: "*", element: <NotFound />, id: 4 },
  { path: "/", element: <Navigate to="/" />, id: 5 },
  { path: "/createtask", element: <Navigate to="/createtask" />, id: 6 },
  { path: "/searchcatalogue", element: <Navigate to="/searchcatalogue" />, id: 7 },
  // { path: "/createtask", element: <Navigate to="/createtask" />, id: 6 },

  {
    path: "/impressum",
    element: <Impressum />,
    id: 8,
  },
];
export const logroutes = () =>{
  routes.forEach(route => console.log(`http://localhost:5173/#${route.path}`))
}

export default routes;
