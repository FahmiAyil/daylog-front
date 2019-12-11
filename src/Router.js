import React from "react";
import {
  BrowserRouter as Routes,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './pages/login/LoginPage'

export default function Router() {
  return (
    <Routes>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        {/* <PrivateRoute path="/protected">
          <React.Fragment />
        </PrivateRoute> */}
      </Switch>
    </Routes>
  );
}
