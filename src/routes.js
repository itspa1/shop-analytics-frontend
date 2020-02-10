import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Login from "./containers/login";

export const authRoutes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          {/* <Route path="/invitations/setpassword" component={SetResetPassword} />
          <Route
            path="/invitations/resetpassword"
            component={SetResetPassword}
          />
          <Route path="/invitations/verifyemail" component={VerifyEmail} />
          <Route path="/forgot-password" component={ForgotPassword} /> */}
          <Route component={Login} />
        </Switch>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export const Routes = ({ userSession }) => {
  console.log(userSession);
};
