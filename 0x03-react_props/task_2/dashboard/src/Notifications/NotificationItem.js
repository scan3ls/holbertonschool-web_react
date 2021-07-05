import React from 'react';

function NotificationItem(type, value, html) {
    return (
        (html)
        ? <li data-priority={type} dangerouslySetInnerHTML={{__html: html}}></li>
        : <li data-priority={type}>{value}</li>
    );
}

export default NotificationItem;
