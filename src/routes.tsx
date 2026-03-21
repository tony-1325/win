import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import Homepage from "./page/homepage.tsx";
import Product from "./page/product.tsx";
import Contact from "./page/contact.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
