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

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import Header from './components/Header';

const domain = import.meta.env.VITE_AUTH0_DOMAIN; 
const clientId = import.meta.env.VITE_AUTH0_CLIENT_Id;   

const Layout=()=>{
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router=createBrowserRouter([{
  path:'/',
  element:<Layout></Layout>,
  children:[
  
   {
    index: true,
    element:<Home/>
  },
  //  {
  //   path:'/',
  //   element:<App/>
  // },
]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
     
      <RouterProvider router={router}/>
    </Auth0Provider>
  
);