import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UnderConstruction from './Page/UnderConstruction/UnderConstruction';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UnderConstruction></UnderConstruction>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
