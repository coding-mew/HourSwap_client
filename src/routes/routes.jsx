import CreateTask from "../Pages/CreateTask";
import Dashboard from "../pages/Dashboard";
import Impressum from "../Pages/Impressum";
import Marketplace from "../Pages/Marketplace";
import NotFound from "../pages/NotFound";
import SearchCatalogue from "../Pages/SearchCatalogue";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";


export const paths = {
  dashboard: "/",
  createTask: "/createtask",
  impressum: "/impressum",
  marketplace: "/marketplace",
  notFound: "/notfound",
  searchCatalogue: "/searchcatalogue",
  signIn: "/signin",
  signUp: "/signup",
};

const isLoggedIn = true


export const allRoutes = () =>{
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
   },
   {
      path: paths.impressum,
      element: <Impressum />,
      isProtected: false,
      redirectPath: null,
      id: paths.impressum,
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
      isProtected: false,
      redirectPath: null,
      id: paths.notFound,
  
   },{
      path: paths.searchCatalogue,
      element: <SearchCatalogue />,
      isProtected: !isLoggedIn,
      redirectPath: paths.signIn,
      id: paths.searchCatalogue,
  
   },{
      path: paths.signIn,
      element: <SignIn />,
      isProtected: false,
      redirectPath: null,
      id: paths.signIn,
  
   },{
      path: paths.signUp,
      element: <SignUp/>,
      isProtected: false,
      redirectPath: null,
      id: paths.signUp,
   }
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

export default allRoutes;
