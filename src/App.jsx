import React from "react";
import { HashRouter, Route, Routes, useNavigate, useNavigation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { StoreProvider } from "./context/store";
import {routes} from "./routes/routes";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <StoreProvider>
            <Layout>
              <Routes>
              {routes.map((route) => {
          return route.isProtected ? (
            <Route
              key={route.id}
              path={route.path}
              element={<Navigate to={route.redirectPath} replace={true} />}
            />
          ) : (
            <Route key={route.id} path={route.path} element={route.element} />
          );
        })}
              </Routes>
            </Layout>

        </StoreProvider>
      </HashRouter>
      <div className="App"></div>
    </>
  );
}

export default App;
