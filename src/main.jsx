import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/Home/About/About.jsx";
import Carrer from "./components/Home/About/carrer/Carrer.jsx";
import LogIn from "./components/Home/LogIn/Regester/LogIn.jsx";
import Regester from "./components/Home/LogIn/Regester/Regester.jsx";
import AuthProvaider from "./components/Home/Provaider/AuthProvaider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/carrer",
        element: <Carrer></Carrer>,
      },

      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/regester",
        element: <Regester></Regester>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvaider>
      <RouterProvider router={router} />
    </AuthProvaider>
  </React.StrictMode>
);
