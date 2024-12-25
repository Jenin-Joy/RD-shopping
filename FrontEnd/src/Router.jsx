import React from 'react'
import { createBrowserRouter, Link } from 'react-router-dom';
import Admin from './Admin/App';
import District from './Admin/Pages/District';
import HomePage from './Admin/Pages/HomePage/HomePage';
import Place from './Admin/Pages/Place';
import Category from './Admin/Pages/Category';
import NewShop from './Admin/Pages/NewShop';
import AcceptedShop from './Admin/Pages/AcceptedShop';
import RejectedShop from './Admin/Pages/RejectedShop';
import ViewComplaint from './Admin/Pages/ViewComplaint';
import ReplyedComplaint from './Admin/Pages/ReplyedComplaint';

export const router = createBrowserRouter([
  {
    path: "Admin",
    element: <Admin />,
    children: [ 
      {
        path: "",
        element: <HomePage /> 
      },
      {
        path: "District",
        element: <District /> 
      },
      {
        path: "Place",
        element: <Place /> 
      },
      {
        path: "Category",
        element: <Category /> 
      },
      {
        path: "NewShop",
        element: <NewShop /> 
      },
      {
        path: "AcceptedShop",
        element: <AcceptedShop /> 
      },
      {
        path: "RejectedShop",
        element: <RejectedShop /> 
      },
      {
        path: "ViewComplaint",
        element: <ViewComplaint /> 
      },
      {
        path: "ReplyedComplaint",
        element: <ReplyedComplaint /> 
      },
    ]
  },
]);
