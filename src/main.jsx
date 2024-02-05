import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ViewCart from './components/ViewCart/ViewCart.jsx';
import Cart from './components/Cart/Cart.jsx';
import ResHome from './components/ResHome/ResHome.jsx';
import SingleMenu from './components/SingleMenu/SingleMenu.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/view-cart",
    element: <ViewCart></ViewCart>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/:slug",
    element: <ResHome></ResHome>,
  },
  {
    path: "/:slug/:cat_slug",
    element: <SingleMenu></SingleMenu>,
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
