import CreateTask from "../Pages/CreateTask";
import Dashboard from "../pages/Dashboard";
import Impressum from "../Pages/Impressum";
import LogoutButton from "../Pages/Logout";
import Marketplace from "../Pages/Marketplace";
import NotFound from "../pages/NotFound";
import SearchCatalogue from "../Pages/SearchCatalogue";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";


export const paths = {
  dashboard: "/",
  createTask: "/createtask",
  impressum: "/impressum",
  logout: "/logout",
  marketplace: "/marketplace",
  notFound: "/notfound",
  searchCatalogue: "/searchcatalogue",
  signIn: "/signin",
  signUp: "/signup",
};


export const routes = [
  {
    path: paths.dashboard,
    element: <Dashboard />,
    isProtected: false,
    redirectPath: paths.signIn,
    id: paths.dashboard,
  },
 {
    path: paths.createTask,
    element: <CreateTask />,
    isProtected: true,
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
    path: paths.logout,
    element: <LogoutButton />,
    isProtected: true,
    redirectPath: paths.signIn,
    id: paths.logout,
 },{
    path: paths.marketplace,
    element: <Marketplace/>,
    isProtected: true,
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
    isProtected: true,
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
export const logroutes = () => {
  routes.forEach((route) =>
    console.log(`http://localhost:5173/#${route.path}`)
  );
};

export default routes;
