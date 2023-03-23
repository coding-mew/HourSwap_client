import React from "react";
import { HashRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { StoreProvider } from "./context/store";

function App() {

  return (
    <>
      <StoreProvider>
        <HashRouter>
          <Layout />
        </HashRouter>
      </StoreProvider>
    </>
  );
}

export default App;
