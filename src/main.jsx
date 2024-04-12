import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { UserAuthContextProvider } from './context/UserAuthenContext.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter 
} from "react-router-dom";
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import HomePage from './components/HomePage.jsx';
import ProtectedRoute from './Auth/ProtectedRoute.jsx';
import Insert from './components/Insert.jsx';
import Dashboard from './components/Dashboard.jsx';
import EditProduct from './components/EditProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/homepage",
    element: <ProtectedRoute><HomePage /></ProtectedRoute>,
  },
  {
    path: "/homepage/insert",
    element: <ProtectedRoute><Insert /></ProtectedRoute>,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
  },
  {
    path: "/homepage/edit/:id",
    element: <ProtectedRoute><EditProduct /></ProtectedRoute>,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <UserAuthContextProvider>
      <RouterProvider router={router}/>
      </UserAuthContextProvider>
        
      
    
  </React.StrictMode>,
)