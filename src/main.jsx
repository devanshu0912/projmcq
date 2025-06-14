// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = import.meta.env.VITE_AUTH0_DOMAIN; // Replace with your actual domain
const clientId = import.meta.env.VITE_AUTH0_CLIENT_Id;      // Replace with your actual client ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
