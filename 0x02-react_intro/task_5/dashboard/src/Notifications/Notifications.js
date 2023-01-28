import React from 'react'
import './Notifications.css';
import { getLatestNotification } from '../utils/utils.js';
import closeIcon from '../assets/close.png'  
  const btnStyle = {
    background: 'transparent',
    border: 'none',
    display: 'block',
    margin:'0 0 0 auto',
  };

export default function Notifications() {
  return (
    <div>
        <button style={btnStyle} aria-label="Close"
        onClick={() => {console.log('Close button has been clicked');}}>
        <img src={closeIcon} alt="close-icon" height="20px" width="20px"></img>
        </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li className='default_priority' data-priority="default">New course available</li>
        <li className='urgent_priority' data-priority="urgent">New resume available</li>
        <li className='text_red' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  )
}
