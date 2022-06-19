import React from "react";
import "materialize-css";
import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { authContext } from "./context/Auth.context";

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <authContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
      <BrowserRouter>
        <div className="container">{routes}</div>
      </BrowserRouter>
    </authContext.Provider>
  );
}

export default App;
