import { useState } from "react";
import styles from './Card-shop.module.css'

export default function CardShop({ title, price, rating, image, category, updateCart, id }) {
  const [count, setCount] = useState(1);

  function increase() {
    setCount((prev) => +prev + 1);
  }

  function decrease() {
    if (count > 0) {
        setCount((prev) => prev - 1);
    }
    
  }

  return (
    <div className={styles.cardContainer} role='figure' data-testid={category}>
      <div className={styles.imgContainer}><img className= {`${styles.img}`} src={image} alt={`image of ${title}`} /></div>
      <p className={styles.title}>{title}</p>
      <div className={styles.price}><span>Price</span><span aria-label="price">{price}</span></div>
      <div className={styles.rating}><span>Rating</span><span aria-label="rating">{rating}</span></div>
      <div className={styles.inputContainer}>
        <button className={styles.decrement} onClick={decrease} aria-label="decrement">
          -
        </button>
        <input
        className={styles.input}
          type="number"
          value={count}
          min={0}
          placeholder="0"
          onChange={(e) => setCount(+e.target.value)}
        />
        <button className={styles.increment} onClick={increase} aria-label="increment">
          +
        </button>
      </div>
      <button className={styles.addButton} onClick={() => updateCart({id: id, numberOfItems: count})}>Add to Cart</button>
    </div>
  );
}
