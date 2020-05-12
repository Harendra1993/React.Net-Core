import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './routes'

function Routes() {

    return (
        <Route
            render={({ location }) => (
                <Switch location={location}>
                    {routes.map((page, index) => {
                        return (
                            <Route
                                exact
                                path={page.pageLink}
                                render={(props) => (
                                    <page.view {...props} key={props.match.params.stateCode || index} />
                                )}
                                key={index}
                            />
                        );
                    })}
                    <Redirect to="/login" />
                </Switch>
            )}
        />
    )
}

export default Routes;
