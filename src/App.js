import React from 'react'
import {createRoot} from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import DashBoard from './components/DashBoard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: (
      <SignIn />
    ),
  },
  {
    path: "/signup",
    element: (
      <SignUp />
    ),
  },
  {
    path: "dashboard",
    element: <DashBoard />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App