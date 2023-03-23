import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { StoreProvider } from "./context/store";
import CreateTask from "./Pages/CreateTask";
import Dashboard from "./Pages/Dashboard";
import Impressum from "./Pages/Impressum";
import NotFound from "./Pages/NotFound";
import SearchCatalogue from "./Pages/SearchCatalogue";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <HashRouter>
        <StoreProvider>
      
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/createtask" element={<CreateTask />} />
                <Route path="/searchcatalogue" element={<SearchCatalogue/>} />


              </Routes>
            </Layout>

        </StoreProvider>
      </HashRouter>
      <div className="App"></div>
    </>
  );
}

export default App;
