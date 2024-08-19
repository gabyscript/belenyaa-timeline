import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import TimeLinePage from './pages/TimeLinePage.jsx'
import NyaatoPage from './pages/NyaatoPage.jsx'
import RecapPage from './pages/RecapPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: "/timeline",
    element: <TimeLinePage />
  },
  {
    path: "/recap",
    element: <RecapPage />
  },
  {
    path: "/nyaato",
    element: <NyaatoPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
