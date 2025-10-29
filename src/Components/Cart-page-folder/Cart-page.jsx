import CardOfCart from "./Card-of-cart";

export default function CartPage({ products, cartItems }) {
  return (
    <section data-testid="cart-page">
      <h1>this cart page</h1>
      {cartItems.length === 0 ? (
        <h2>no product buy</h2>
      ) : (
        cartItems.map((el) => (
          <CardOfCart
            key={products[el.id - 1].id}
            image={products[el.id - 1].image}
            title={products[el.id - 1].title}
            price={products[el.id - 1].price}
            id={products[el.id - 1].id}
            numberOfItems={el.numberOfItems}
          />
        ))
      )}

      <section>
        <div>
          <span aria-label="subtotal"></span>
        </div>
      </section>
    </section>
  );
}
