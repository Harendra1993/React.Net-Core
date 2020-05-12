import { lazy } from 'react';

import { Home } from '@/components/Home';
const Login = lazy(() => import('@/components/account/Login'));
const CreateAccount = lazy(() => import('@/components/account/Create'));
const ListAccounts = lazy(() => import('@/components/account/List'));

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