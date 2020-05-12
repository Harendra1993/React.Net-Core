import { authenticationService } from '@/services';

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if ([401, 403].indexOf(data.statusCode) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            authenticationService.logout();
            // window.location.reload(true);

            const error = (data && data.result.errorMessage) || response.statusText;
            return Promise.reject(error);
        }

        return data.result;
    });
}