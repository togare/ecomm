import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import '../node_modules/bootstrap/dist/js/bootstrap.min'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './prod';
import Countryy from './country';
import Coo from './countrydet';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/products',
        element:<Product/>
      },
      {
        path:'/countries',
        element:<Countryy></Countryy>
      },
      {
        path:'/countryDetails/:cname/:capital/:population',
        element:<Coo/>
      }
    ]
  },
  
])
root.render(
 <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

