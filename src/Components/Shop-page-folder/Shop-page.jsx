import { Fragment, useState } from "react";
import CardShop from "./Card-shop";

export default function ShopPage({ products, updateCart }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  // const [sortedProducts, setSortedProducts] = useState(filteredProducts)
  const [checkedSort, setCheckedStore] = useState(false);
  const [checkedSortByRating, setCheckedStoreByRating] = useState(false);
  function sortProducts() {
    setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
  }
  function sortProductsByRating() {
    setFilteredProducts((prev) => [...prev].sort((a, b) => b.rating.rate - a.rating.rate));
  }
  function filterProduct(category) {
    setFilteredProducts(products.filter((el) => el.category === category));
    setCheckedStore(false);
    setCheckedStoreByRating(false)
  }
  return (
    <section data-testid="shop-page">
      <div id="sideBar">
        <div>
          <label htmlFor="all">all</label>
          <input
            onChange={() => {setFilteredProducts(products); setCheckedStore(false)}}
            type="radio"
            name="category-choice"
            id="all"
          />
        </div>
        <div>
          <label htmlFor="men-clothing">men's clothing</label>
          <input
            onChange={() => filterProduct("men's clothing")}
            type="radio"
            name="category-choice"
            id="men-clothing"
          />
        </div>
        <div>
          <label htmlFor="jewelery">jewelery</label>
          <input
            onChange={() => filterProduct("jewelery")}
            type="radio"
            name="category-choice"
            id="jewelery"
          />
        </div>
        <div>
          <label htmlFor="electronics">electronics</label>
          <input
            onChange={() => filterProduct("electronics")}
            type="radio"
            name="category-choice"
            id="electronics"
          />
        </div>
        <div>
          <label htmlFor="women-clothing">women's clothing</label>
          <input
            onChange={() => filterProduct("women's clothing")}
            type="radio"
            name="category-choice"
            id="women-clothing"
          />
        </div>


        <div>
          <label htmlFor="sort-by-price">Sort by price</label>
          <input
            onChange={(e) => {
              sortProducts();
              setCheckedStore(e.target.checked);
              setCheckedStoreByRating(!e.target.checked);
            }}
            type="radio"
            name="sort-choice"
            id="sort-by-price"
            checked={checkedSort}
          />
        </div>
        <div>
          <label htmlFor="sort-by-rating">Sort by rating</label>
          <input
            onChange={(e) => {
              sortProductsByRating();
              setCheckedStoreByRating(e.target.checked);
              setCheckedStore(!e.target.checked);
            }}
            type="radio"
            name="sort-choice"
            id="sort-by-rating"
            checked={checkedSortByRating}
          />
        </div>
      </div>
      <h1>this is Shop Page</h1>
      {filteredProducts.map((el) => (
        <CardShop
          category={el.category}
          price={el.price}
          rating={el.rating.rate}
          image={el.image}
          title={el.title}
          key={el.id}
          updateCart={updateCart}
          id={el.id}
        />
      ))}
    </section>
  );
}
