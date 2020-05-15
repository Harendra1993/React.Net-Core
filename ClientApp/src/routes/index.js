import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "@/components/common";
import { routes } from "./routes";

function Routes() {
  return (
    <Route
      render={({ location }) => (
        <Switch location={location}>
          {routes.map((page, index) => {
            const CustomRoute = page.public ? Route : PrivateRoute;

            return (
              <CustomRoute
                exact
                path={page.pageLink}
                component={(props) => (
                  <page.view
                    {...props}
                    key={props.match.params.stateCode || index}
                  />
                )}
                key={index}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      )}
    />
  );
}

export default Routes;
