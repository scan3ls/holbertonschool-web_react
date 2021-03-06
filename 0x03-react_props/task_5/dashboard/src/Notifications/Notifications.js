import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import NotificationItem from './NotificationItem'; 
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const button_click = () => {
    console.log('Close button has been clicked');
};

const button_style = {
    position: 'relative',
    left: '97%',
    width: '1rem',
    height: '1rem',
    margin: '1px 1px',
    border: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    cursor: 'pointer'
};

const img_style = {
    width: '1rem',
    height: '1rem'
};

const list_style = {
    listStyle: 'disc'
};

function NotificationRows(props) {
    const { listNotifications } = props;

    if (listNotifications.length === 0) return(
        <NotificationItem
            type="defualt"
            value="No new notification for now"
        />
    );

    return(
        listNotifications.map(
            (notification) =>
                <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    html={notification.html}
                    value={notification.value}
                />
        )
    );
}


export default function Notifications(props) {
    const hidden = !props.displayDrawer;
    const { listNotifications } = props;

    return (
        <div className="main_notice">
            <div className="menuItems">
                <p>Your notifications</p>
            </div>
            <div hidden={hidden} className="Notifications">
                <button style={button_style} aria-label="Close" onClick={button_click}>
                    <img style={img_style} src={closeIcon} alt="close-img"></img>
                </button>
                <p>Here is the list of notifications</p>
                <ul style={list_style}>
                    <NotificationRows listNotifications={listNotifications} />
                </ul>
            </div>
        </div>
    );
}

Notifications.propTypes = {
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    listNotifications: []
}
