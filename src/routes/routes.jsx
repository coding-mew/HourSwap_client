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
  notFound: "/notfound",
  searchCatalogue: "/searchcatalogue",
  signIn: "/signin",
  signUp: "/signup",
};




export const AllRoutes = () =>{

  const {user} = useStore();
console.log(useStore)
  const userArray = Object.values(user)
  console.log("🚀 ~ file: routes.jsx:32 ~ AllRoutes ~ userArray:", userArray)
  const isLoggedIn = userArray.length>0;
  // const isLoggedIn = user.isEmpty()
  console.log(isLoggedIn)

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
      isProtected: isLoggedIn,
      redirectPath: null,
      id: paths.impressum,
   },
  {
      path: paths.marketplace,
      element: <Marketplace/>,
      isProtected: isLoggedIn,
      redirectPath: paths.signIn,
      id: paths.marketplace,
   },{
      path: paths.notFound,
      element: <NotFound />,
      isProtected: isLoggedIn,
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
      isProtected: isLoggedIn,
      redirectPath: null,
      id: paths.signIn,
  
   },{
      path: paths.signUp,
      element: <SignUp/>,
      isProtected: isLoggedIn,
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

export default AllRoutes;
