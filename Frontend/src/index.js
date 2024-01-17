import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hero from "./components/Hero/Hero"
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import About from './components/About/About';
import Services from './components/services/Services'
import Contact from './components/Contact/Contact'
import Login from './pages/Validation/Login'
import Signup from './pages/Validation/Singup'

const router = createBrowserRouter([
  {
    path : "/",
    element: <App/>,
    children : [
      {
        path : "",
        element: <Hero />
      },
      {
        path : "about",
        element: <About />
      },
      {
        path : "services",
        element: <Services />
      },
      {
        path : "contact",
        element: <Contact />
      },
      {
        path : "login",
        element: <Login />
      },
      {
        path : "signup",
        element: <Signup />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


