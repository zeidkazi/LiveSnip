import React from "react";
import { createBrowserRouter } from "react-router";
import { PageLayout } from "../components/Layouts/PageLayout";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <h1 className="bg-red-400">YO</h1>
          </>
        ),
      },
    ],
  },
]);
