import CreateTask from "../Pages/CreateTask";
import Dashboard from "../pages/Dashboard";
import Impressum from "../Pages/Impressum";
import Marketplace from "../Pages/Marketplace";
import NotFound from "../pages/NotFound";
import SearchCatalogue from "../Pages/SearchCatalogue";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import { useStore } from "../context/store";
import BuyToken from "../Pages/BuyToken";
import SendToken from "../Pages/SendToken";
import ActiveTasksForActiveUser from "../Pages/ActiveTasksForUser";



export const paths = {
  dashboard: "/",
  createTask: "/createtask",
  impressum: "/impressum",
  marketplace: "/marketplace",
  searchCatalogue: "/searchcatalogue",
  signIn: "/signin",
  signUp: "/signup",
  buyToken: "/buytoken",
  sendToken: "/sendtoken",
  getTasksforUser: "/gettasksforuser",
};


export const AllRoutes = () =>{
const {isLoggedIn} = useStore();

  const routes = [
    {
      path: paths.dashboard,
      element: <Dashboard />,
      isProtected: !isLoggedIn,
      redirectPath: paths.signIn,
      id: paths.dashboard,
    },{
      path: paths.sendToken,
      element: <SendToken />,
      isProtected: !isLoggedIn,
      redirectPath: paths.signIn,
    },{
      path: paths.getActiveTasks,
      element: <ActiveTasksForActiveUser />,
      isProtected: !isLoggedIn,
      redirectPath: paths.signIn,
    },

    {
      path: paths.buyToken,
      element: <BuyToken />,
      isProtected: !isLoggedIn,
      redirectPath: paths.signIn,
      id: paths.buyToken,
    },
   {
      path: paths.createTask,
      element: <CreateTask />,
      isProtected: !isLoggedIn,
      redirectPath: paths.signIn,
      id: paths.createTask,
   },{
    path: paths.searchCatalogue,
    element: <SearchCatalogue />,
    isProtected: !isLoggedIn,
    redirectPath: paths.signIn,
    id: paths.searchCatalogue,

 },
  {
      path: paths.marketplace,
      element: <Marketplace/>,
      isProtected: !isLoggedIn,
      redirectPath: paths.signIn,
      id: paths.marketplace,
   },{
    path: paths.signIn,
    element: <SignIn />,
    isProtected: isLoggedIn,
    redirectPath: null,
    id: paths.signIn,

 },{
    path: paths.signUp,
    element: <SignUp/>,
    isProtected: isLoggedIn,
    redirectPath: null,
    id: paths.signUp,
 },{
  path: paths.impressum,
  element: <Impressum />,
  isProtected: isLoggedIn,
  redirectPath: null,
  id: paths.impressum,
},
  ];
const logroutes = () => {
    routes.forEach((route) =>
      console.log(`http://localhost:5173/#${route.path}`)
    );
  };
  return {
    routes, logroutes
  }
}

export default AllRoutes;
