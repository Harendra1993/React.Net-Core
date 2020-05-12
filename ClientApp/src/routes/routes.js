import { lazy } from 'react';

export const routes = [
    {
        pageLink: '/',
        view: page('Home'),
        displayName: 'Home',
        animationDelayForNavbar: 0.2,
        showInNavbar: true,
    },
    {
        pageLink: '/login',
        view: page('account/Login'),
        displayName: 'Login',
        animationDelayForNavbar: 0.3,
        showInNavbar: true,
    },
    {
        pageLink: '/account/create',
        view: page('account/Create'),
        displayName: 'Create Account',
        animationDelayForNavbar: 0.4,
        showInNavbar: true,
    },
    {
        pageLink: '/account',
        view: page('account/List'),
        displayName: 'Users List',
        animationDelayForNavbar: 0.5,
        showInNavbar: true,
    }
];

function page(path) {
    return lazy(() => import(`@/pages/${path}`));
}
