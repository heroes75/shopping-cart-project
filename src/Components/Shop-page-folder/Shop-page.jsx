import { Fragment } from "react";

export default function ShopPage({products}) {
    return (
        <section data-testid='shop-page'>
            <h1>this is Shop Page</h1>
            {/* {products.map(el => <h4 key={el.id}>{el.title}</h4>)} */}
            <h4>Mens Cotton Jacket</h4>
            <h4>Mens Casual Premium Slim Fit T-Shirts</h4>
            <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
        </section>
    )
}