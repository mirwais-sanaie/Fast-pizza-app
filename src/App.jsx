import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayOut from "./ui/AppLayOut";
import HomePage from "./ui/HomePage";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayOut />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/new",
          element: <Order />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
