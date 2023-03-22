import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { NavbarProvider } from "./context/NavbarContext";
import { AuthProvider } from "./context/authContext";
import Dashboard from "./Pages/Dashboard";
import Impressum from "./Pages/Impressum";
import NotFound from "./Pages/NotFound";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";



function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <NavbarProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/impressum" element={<Impressum/>} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp/>} />
            </Routes>
          </Layout>
          </NavbarProvider>
        </AuthProvider>
      </HashRouter>
      <div className="App"></div>
    </>
  );
}

export default App;
