import React from "react";
import {
  BrowserRouter as Routes,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './pages/login/LoginPage'
import DashboardPage from './pages/dashboard/DashboardPage'

export default function Router() {
  return (
    <Routes>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>

        {/* <PrivateRoute path="/protected">
          <React.Fragment />
        </PrivateRoute> */}
      </Switch>
    </Routes>
  );
}
