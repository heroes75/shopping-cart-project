import { useState } from "react";

export default function CardShop({ title, price, rating, image, category }) {
  const [count, setCount] = useState(1);

  function increase() {
    setCount((prev) => prev + 1);
  }

  function decrease() {
    if (count > 0) {
        setCount((prev) => prev - 1);
    }
    
  }

  return (
    <div role='figure' data-testid={category}>
      <img src={image} alt={`image of ${title}`} />
      <p>{title}</p>
      <span>{price}</span>
      <span>{rating}</span>
      <button onClick={decrease} aria-label="decrement">
        -
      </button>
      <input
        type="number"
        value={count}
        min={0}
        placeholder="0"
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={increase} aria-label="increment">
        +
      </button>
      <button>Add to Cart</button>
    </div>
  );
}
