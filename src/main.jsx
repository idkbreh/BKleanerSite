import React from 'react'
import ReactDOM from 'react-dom/client'
import { pageRoutes } from './constant/pageControl.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={pageRoutes}/>
  </React.StrictMode>,
)
