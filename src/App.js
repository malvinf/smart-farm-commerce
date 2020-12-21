/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import routes from './config/routes';
import { isUserAuthenticated, accountType } from './utils/cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrivateRoute = ({ component: Component, accountTypes, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (isUserAuthenticated()) {
          if (accountTypes === accountType()) {
            return <Component />;
          }
          return <Redirect to="/" />;
        }
        return <Redirect to="/Login" />;
      }}
    />
  );
};

const PublicRoute = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (isUserAuthenticated()) {
          if (path !== '/Login' && path !== '/Register') {
            return <Component />;
          }
          return <Redirect to="/" />;
        }
        return <Component />;
      }}
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => {
          if (route.isPublic) {
            return (
              <PublicRoute
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          }
          return (
            <PrivateRoute
              accountTypes={route.accountType}
              path={route.path}
              component={route.component}
              key={route.path}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
