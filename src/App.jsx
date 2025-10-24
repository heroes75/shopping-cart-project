import { useEffect, useState } from "react";
import "./App.css";
import { Link, useParams } from "react-router";
import Homepage from "./Components/Home-page-folder/Home-page";
import ShopPage from "./Components/Shop-page-folder/Shop-page";
import CartPage from "./Components/Cart-page-folder/Cart-page";

function App() {
  const { name } = useParams();
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(res => {
      console.log('res:', res)
    })
  })
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
        {
          name === 'shop' ? (
            <ShopPage />
          ) : name === 'cart' ?
          (
            <CartPage />
          ) :
          (<Homepage />)
        }
        {/* <Outlet /> */}
      </main>
    </>
  );
}

export default App;
