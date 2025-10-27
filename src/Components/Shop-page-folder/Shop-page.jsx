import { Fragment, useState } from "react";
import CardShop from "./Card-shop";

export default function ShopPage({products}) {
    const [filteredProducts, setFilteredProducts] = useState(products)
    function filterProduct(category) {
        setFilteredProducts(products.filter(el => el.category === category))
    }
    return (
        <section data-testid='shop-page'>
            <div id="sideBar">
                <div><label htmlFor="category">men's clothing</label><input onChange={() => filterProduct("men's clothing")} type="radio" name="category-choice" id="category" /></div>
            </div>
            <h1>this is Shop Page</h1>
            {filteredProducts.map(el => <CardShop category={el.category} price={el.price} rating={el.rating.rate} image={el.image} title={el.title} key={el.id}/>)}
        </section>
    )
}