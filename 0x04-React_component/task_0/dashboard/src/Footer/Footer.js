import React from 'react';
import {getFooterCopy, getFullYear} from '../utils';

function Footer() {
    return (
        <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
    );
}

export default Footer;
