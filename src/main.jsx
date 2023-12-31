import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PaginaInicial from './routes/PaginaInicial.jsx'
import ConsultasRealizadas from './routes/ConsultasRealizadas.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      //elementos do <Outlet /> declarado no App.jsx
      {
        path: "/",
        element: <PaginaInicial />
      },
      {
        path: "/consultas",
        element: <ConsultasRealizadas />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
