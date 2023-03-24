import CreateTask from "../Pages/CreateTask";
import Dashboard from "../pages/Dashboard";
import Impressum from "../Pages/Impressum";
import Marketplace from "../Pages/Marketplace";
import NotFound from "../pages/NotFound";
import SearchCatalogue from "../Pages/SearchCatalogue";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import { useStore } from "../context/store";



export const paths = {
  dashboard: "/",
  createTask: "/createtask",
  impressum: "/impressum",
  marketplace: "/marketplace",
  notFound: "/*",
  searchCatalogue: "/searchcatalogue",
  signIn: "/signin",
  signUp: "/signup",
};




export const AllRoutes = () =>{

  const {user} = useStore();
  const userArray = Object.values(user)

  const isLoggedIn = userArray.length>0;

// const isLoggedIn = false


  const routes = [
    {
      path: paths.dashboard,
      element: <Dashboard />,
      isProtected: !isLoggedIn,
      redirectPath: paths.signIn,
      id: paths.dashboard,
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
      path: paths.notFound,
      element: <NotFound />,
      isProtected: isLoggedIn,
      redirectPath: null,
      id: paths.notFound,
  
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
