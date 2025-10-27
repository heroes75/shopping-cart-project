import { useEffect, useState } from "react";
import "./App.css";
import { Link, useParams } from "react-router";
import Homepage from "./Components/Home-page-folder/Home-page";
import ShopPage from "./Components/Shop-page-folder/Shop-page";
import CartPage from "./Components/Cart-page-folder/Cart-page";

function App() {
  const { name } = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/", { mode: 'cors'})
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((res) => {
        console.log("res:", res);
        setProducts(res);
        // cons
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => setLoading(false));
  }, []);

  if(error) return <h1>Error no data fetch</h1>
  if (loading) return <h1>LOADING...</h1>;
  return (
    <>
      <nav data-testid="nav">
        <ol>
          <li>
            <Link to="/homepage">Homepage</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ol>
      </nav>
      <main>
        {name === "shop" ? (
          <ShopPage products={products} />
        ) : name === "cart" ? (
          <CartPage />
        ) : (
          <Homepage />
        )}
        {/* <Outlet /> */}
      </main>
    </>
  );
}

export default App;
