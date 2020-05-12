import { lazy } from 'react';

import { Home } from '@/pages/Home';
const Login = lazy(() => import('@/pages/account/Login'));
const CreateAccount = lazy(() => import('@/pages/account/Create'));
const ListAccounts = lazy(() => import('@/pages/account/List'));

// function page(path) {
//   return () =>
//     import( /* webpackChunkName: '' */ `@/pages/${path}`).then(
//       m => m.default || m
//     );
// }

export const pages = [
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