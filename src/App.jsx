import React from "react";
import { HashRouter, Route, Routes, useNavigate, useNavigation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { StoreProvider } from "./context/store";

import { Navigate } from "react-router-dom";
import { allRoutes } from "./routes/routes";

function App() {
  const {routes} = allRoutes();
  return (
    <>
      <HashRouter>
        <StoreProvider>
            <Layout>
              <Routes>
              {routes.map((route) => {
                console.log(route.path, route.isProtected)
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
