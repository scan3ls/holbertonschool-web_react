import * as user from '../../dist/login-success.json';
import * as notifications from '../../dist/notifications.json';

export function bound(func) {
    return func;
}

export function ping(any, getNotice = false) {
    const response = {
        json: () => (getNotice ? notifications : user)
    }

    return new Promise((resolve, reject) => {
        if (!user) reject("Bad connection");
        setTimeout(() => {
            resolve(response);
        }, 250);
    });
}
