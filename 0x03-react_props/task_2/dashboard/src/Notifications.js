import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification} from './utils';

const button_click = () => {
    console.log('Close button has been clicked');
};

const button_style = {
    display: 'inline',
    position: 'absolute',
    right: '0.1rem',
    top: '0.1rem',
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

export default function Notifications() {
    return (
        <div className="Notifications">
            <button style={button_style} aria-label="Close" onClick={button_click}>
                <img style={img_style} src={closeIcon} alt="close-img"></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul style={list_style}>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification() }} />
            </ul>
        </div>
    );
}
