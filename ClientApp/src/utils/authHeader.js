import { authenticationService } from '@/services';

export function authHeader() {
    // return token header with jwt token
    const token = authenticationService.token;
    if (token) {
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
}