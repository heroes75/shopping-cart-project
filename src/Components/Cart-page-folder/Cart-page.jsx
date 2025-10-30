import CardOfCart from "./Card-of-cart";

export default function CartPage({ products, cartItems, deleteItemsCart }) {
  const subtotal = cartItems.reduce((acc, cur) => acc + products[cur.id - 1].price * cur.numberOfItems, 0);
  const shippingFees = 20;
  const tax = subtotal * 20 / 100;
  const total = subtotal + shippingFees + tax;
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
            deleteItemsCart={deleteItemsCart}
          />
        ))
      )}

      <section>
        <div>
          <div><span aria-label="subtotal">{cartItems.reduce((acc, cur) => acc + products[cur.id - 1].price * cur.numberOfItems, 0)}</span></div>
          <div><span aria-label="shipping-fees">20</span></div>
          <div><span aria-label="tax">{subtotal * 20 / 100}</span></div>
          <span aria-label="total">{total}</span>
        </div>
      </section>
    </section>
  );
}
