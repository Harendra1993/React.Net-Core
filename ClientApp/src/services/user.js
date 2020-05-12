import config from '@/config';
import { authHeader, handleResponse } from '@/helpers';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.api.url}/users`, requestOptions).then(handleResponse);
}