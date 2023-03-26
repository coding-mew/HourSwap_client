import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import { AllRoutes } from "../../routes/routes";
import { useStore } from "../../context/store";
import NotFound from "../../pages/NotFound";

function Layout() {
  const { routes } = AllRoutes();
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
              {routes.map((route) => {
                // console.log(route.path, route.isProtected);
                return route.isProtected ? (
                  <Route
                    key={route.id}
                    path={route.path}
                    element={
                      <Navigate to={route.redirectPath} replace={true} />
                    }
                  />
                ) : (
                  <Route
                    key={route.id}
                    path={route.path}
                    element={route.element}
                  />
                );
              })}

              <Route path='*' element={<NotFound />} />
            </Routes>
      <Footer />
    </>
  );
}

export default Layout;
