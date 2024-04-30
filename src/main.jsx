/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import Profile from "./components/Profile/Profile.jsx";
import Borrow from "./components/Borrow/Borrow.jsx";
import Lend from "./components/Lend/Lend.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "lend",
        element: <Lend />,
      },
      {
        path: "borrow",
        element: <Borrow />,
      },
      // {
      //   path: "profile",
      //   element: <Profile />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-3hjtkgc6bauj7uan.us.auth0.com"
    clientId="c3GBmocKnDrDWhP8Dy2Pn5zIwJgeRIHy"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router}></RouterProvider>
  </Auth0Provider>
);
