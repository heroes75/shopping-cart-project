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
  const [cartItems, setCartItems] = useState([]);

  function updateCart(obj) {
    const copy = [...cartItems]
    if(copy.filter(el => el.id === obj.id).length === 0) {
      setCartItems([...cartItems, obj])
      return
    }
    for (const el of copy) {
      if(el.id === obj.id) el.numberOfItems +=  obj.numberOfItems
    }
    setCartItems([...copy]);
  }
  function increaseItemsCart(id) {
    const copy = [...cartItems]
    for (const el of copy) {
      if(el.id === id) el.numberOfItems +=  1
    }
    setCartItems([...copy]);
  }
  
  function decreaseItemsCart(id) {
    const copy = [...cartItems]
    for (const el of copy) {
      if(el.id === id) el.numberOfItems -=  1
    }
    setCartItems([...copy]);
  }
  function updateItemsCart(id, value) {
    const copy = [...cartItems]
    for (const el of copy) {
      if(el.id === id) el.numberOfItems =  value
    }
    setCartItems([...copy]);
  }
  function deleteItemsCart(id) {
	const copy = [...cartItems]
	const index = cartItems.findIndex(el => el.id === id)
	copy.splice(index, 1)
	setCartItems(copy)
  }
  function allItems() {
    return cartItems.reduce((acc, cur) => acc + cur.numberOfItems, 0)
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/", { mode: "cors" })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((res) => {
        setProducts(res);
        console.log('res:', res)
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (error) return <h1>Error no data fetch</h1>;
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
            <Link to="/cart">Cart</Link> {" "}
            <span data-testid="number-of-items-of-card">{allItems()}</span>
          </li>
        </ol>
      </nav>
      <main>
        {name === "shop" ? (
          <ShopPage products={products} updateCart={updateCart} />
        ) : name === "cart" ? (
          <CartPage cartItems={cartItems} products={products} deleteItemsCart={deleteItemsCart} increaseItemsCart={increaseItemsCart} decreaseItemsCart={decreaseItemsCart} updateItemsCart={updateItemsCart} />
        ) : (
          <Homepage />
        )}
        {/* <Outlet /> */}
      </main>
    </>
  );
}

export default App;
