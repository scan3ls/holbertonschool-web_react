import * as notifications from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
    const list = [];

    for (const item in notifications) {
        const {id, author, context} = notifications[item];
        if (author === undefined) continue;
        if (author.id === userId) list.push(context);
    }

    return list;
}
