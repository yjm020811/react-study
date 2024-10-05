import React from "react";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import("../views/home/index"));
const Entire = React.lazy(() => import("../views/entire/index"));
const Deatil = React.lazy(() => import("../views/detail/index"));

const routes = [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <Home></Home> },
  { path: "/entire", element: <Entire></Entire> },
  { path: "/detail", element: <Deatil></Deatil> }
];
export default routes;
