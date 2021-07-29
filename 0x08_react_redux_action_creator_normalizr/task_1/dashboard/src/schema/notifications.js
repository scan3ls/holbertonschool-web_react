import * as notifications from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export function getAllNotificationsByUser(userId) {
    const list = [];

    for (const item in notifications) {
        const {id, author, context} = notifications[item];
        if (author === undefined) continue;
        if (author.id === userId) list.push(context);
    }

    return list;
}

const user = new schema.Entity("users");
const message = new schema.Entity("messages", undefined, {idAttribute: 'guid'});
const notification = new schema.Entity("notifications",{
    author: user,
    context: message
});
const normalizeData = normalize(notifications, [notification]);

export { normalizeData };
