import App from "./App";
import ShopPage from "./Components/Shop-page-folder/Shop-page";
import CartPage from "./Components/Cart-page-folder/Cart-page";
import Homepage from "./Components/Home-page-folder/Home-page";
import ErrorPage from "./Components/Error-page-folder/Error-page";

const routes = [
  {
    path: "/:name?",
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     index: true,
    //     element: <Homepage />,
    //   },
    //   {
    //     path: "homepage",
    //     element: <Homepage />,
    //   },
    //   {
    //     path: "shop",
    //     element: <ShopPage />,
    //   },
    //   {
    //     path: "cart",
    //     element: <CartPage />,
    //   },
    // ],
  },
];

export default routes;
