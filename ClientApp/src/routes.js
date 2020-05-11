import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home } from './components/Home';
const Login = lazy(() => import('./components/account/Login'));
const CreateAccount = lazy(() => import('./components/account/Create'));
const ListAccounts = lazy(() => import('./components/account/List'));


function Routes(props) {
    const pages = [
        {
            pageLink: '/',
            view: Home,
            displayName: 'Home',
            animationDelayForNavbar: 0.2,
            showInNavbar: true,
        },
        {
            pageLink: '/login',
            view: Login,
            displayName: 'Login',
            animationDelayForNavbar: 0.3,
            showInNavbar: true,
        },
        {
            pageLink: '/account/create',
            view: CreateAccount,
            displayName: 'Create Account',
            animationDelayForNavbar: 0.4,
            showInNavbar: true,
        },
        {
            pageLink: '/account',
            view: ListAccounts,
            displayName: 'Users List',
            animationDelayForNavbar: 0.5,
            showInNavbar: true,
        }
    ];

    return (
        <Route
            render={({ location }) => (

                <div className="Almighty-Router">
                    <Switch location={location}>
                        {pages.map((page, index) => {
                            return (
                                <Route
                                    exact
                                    path={page.pageLink}
                                    render={({ match }) => (
                                        <page.view {...props} key={match.params.stateCode || index} />
                                    )}
                                    key={index}
                                />
                            );
                        })}
                        <Redirect to="/" />
                    </Switch>
                </div>
            )}
        />
    )
}

export default Routes;
