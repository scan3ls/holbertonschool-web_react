import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification} from '../utils';
import NotificationItem from './NotificationItem'; 

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

export default function Notifications(props) {
    const hidden = !props.displayDrawer;

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
                    <NotificationItem type="default" value="New course available"/>
                    <NotificationItem type="urgent" value="New course available"/>
                    <NotificationItem type="urgent" value="New course available" html={getLatestNotification()}/>
                </ul>
            </div>
        </div>
    );
}
