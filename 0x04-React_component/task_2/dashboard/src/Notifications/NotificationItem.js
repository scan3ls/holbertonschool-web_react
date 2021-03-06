import React from 'react';

function NotificationItem(props) {
    const {value, html, markAsRead, id} = props;
    let type;
    if (html) {
        if (typeof html !== "object") throw new Error(`html must be an object got ${typeof html}`);
        if (html.__html === undefined) throw new Error('html must have a key of "__html"');
        if (typeof html.__html !== "string") throw new Error('html.__html must be a string');
    }


    if (value) {
        if (typeof value !== 'string') throw new Error('value must be a string');
    }

    if (props.type) {
        type = props.type;
        if (typeof type !== 'string') throw new Error('type must be a string');
    } else {
        type = 'default';
    }

    return (
        (html)
        ? <li data-priority={type} onClick={() => {markAsRead(id)}} dangerouslySetInnerHTML={html}></li>
        : <li data-priority={type} onClick={() => {markAsRead(id)}}>{value}</li>
    );
}

export default NotificationItem;
