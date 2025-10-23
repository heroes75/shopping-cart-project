import App from "./App";
import ShopPage from "./Components/Shop-page-folder/Shop-page";
import CartPage from "./Components/Cart-page-folder/Cart-page";
import Homepage from "./Components/Home-page-folder/Home-page";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: 'homepage',
        element: <Homepage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
];

export default routes;
