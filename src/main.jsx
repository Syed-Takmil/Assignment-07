




import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/routes.jsx'
import ProfileContextProvider from './context/ProfileContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ProfileContextProvider>
     <RouterProvider router={router} />
     <ToastContainer/>
   </ProfileContextProvider>

  </StrictMode>,
)
