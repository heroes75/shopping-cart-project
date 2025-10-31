import CardOfCart from "./Card-of-cart";
import styles from "./Cart-page.module.css"

export default function CartPage({ products, cartItems, deleteItemsCart, increaseItemsCart, decreaseItemsCart, updateItemsCart }) {
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
            increaseItemsCart={increaseItemsCart}
            decreaseItemsCart= {decreaseItemsCart}
            updateItemsCart={updateItemsCart}
          />
        ))
      )}

      <section className={styles.summary}>
        <div>
          <div className={styles.div}><span>Subtotal</span><span aria-label="subtotal">{cartItems.reduce((acc, cur) => acc + products[cur.id - 1].price * cur.numberOfItems, 0)}</span></div>
          <div className={styles.div}><span>Shipping-Fees</span><span aria-label="shipping-fees">20</span></div>
          <div className={styles.div}><span>Tax</span><span aria-label="tax">{subtotal * 20 / 100}</span></div>
          <div className={styles.div}><span>Total</span><span aria-label="total">{total}</span></div>
        </div>
      </section>
    </section>
  );
}
