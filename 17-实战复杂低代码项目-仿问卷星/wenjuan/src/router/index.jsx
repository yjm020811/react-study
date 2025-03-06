import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layout/MainLayout.jsx";
import { ManageLayout } from "../layout/ManageLayout.jsx";
import { QuestionLayout } from "../layout/QuestionLayout.jsx";
import { Home } from "../pages/Home.jsx";
import { Login } from "../pages/Login.jsx";
import { Register } from "../pages/Register.jsx";
import { NotFound } from "../pages/NotFound.jsx";
import { Edit } from "../pages/Question/Edit.jsx";
import { Stat } from "../pages/Question/Stat.jsx";
import { Trash } from "../pages/Manage/Trash.jsx";
import { Star } from "../pages/Manage/Star.jsx";
import { List } from "../pages/Manage/List.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/manage",
        element: <ManageLayout />,
        children: [
          { path: "/manage/list", element: <List /> },
          { path: "/manage/trash", element: <Trash /> },
          { path: "/manage/star", element: <Star /> }
        ]
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
  {
    path: "/question",
    element: <QuestionLayout />,
    children: [
      { path: "/question/edit/:id", element: <Edit /> },
      { path: "/question/stat/:id", element: <Stat /> }
    ]
  }
]);

export default router;
