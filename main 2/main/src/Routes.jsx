import React from "react";
import { useRoutes } from "react-router-dom";

import Homescreen from "pages/Homescreen";
import LoginSignup from "pages/LoginSignup/LoginSignup";
import Cart from "pages/Cart";
import PaymentPage from "pages/Payment";
import Manufacturer from "pages/Manufacturer/Manufacturer";
import Edit from "pages/Edit";
import Analysis from "pages/Analysis";
import InventoryPage from "pages/Inventory";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <LoginSignup /> },
    {
      path: "homescreen",
      element: <Homescreen />,
    },
    {
      path: "Cart",
      element:<Cart/>

    },
    {
      path: "payment",
      element: <PaymentPage />
    },
    {
      path: "manufacturer",
      element: <Manufacturer />,
    },
    {
      path: "edit",
      element: <Edit />,
    },
    {
      path: "analysis",
      element: <Analysis />,
    },
    {
      path: "inventory",
      element: <InventoryPage />,
    },

  ]);

  return element;
};

export default ProjectRoutes;
