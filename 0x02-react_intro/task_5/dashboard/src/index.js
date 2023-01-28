import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.js';
import Notifications from './Notifications/Notifications.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div>
        <div className='root-notifications'>
            <Notifications />
        </div>
        <App />
    </div>


);



