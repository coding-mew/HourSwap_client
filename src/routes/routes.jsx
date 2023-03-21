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
    path: "/signIn",
    element: <SignIn />,
    id: 2,
  },
  {
    path: "/signUp",
    element: <SignUp/>,
    id: 3,
  },
  { path: "*", element: <NotFound />, id: 4 },
  { path: "/", element: <Navigate to="/" />, id: 5 },
  // { path: "/hourSwap/", element: <Navigate to="/home" />, id: 6 },
  {
    path: "/impressum",
    element: <Impressum />,
    id: 7,
  },
];
export const logroutes = () =>{
  routes.forEach(route => console.log(`http://localhost:5173/#${route.path}`))
}

export default routes;
