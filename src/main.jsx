import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Pessoal from './Pessoal.jsx'
import Profissional from './Profissional.jsx'
import React from 'react'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Pessoal",
    element: <Pessoal />,
  },
  {
    path: "/Profissional",
    element: <Profissional />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
