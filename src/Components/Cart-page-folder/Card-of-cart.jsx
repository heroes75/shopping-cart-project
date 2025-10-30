import { useState } from "react"

export default function CardOfCart({image, title, price, id, numberOfItems, deleteItemsCart}) {
    const [count, setCount] = useState(numberOfItems)

    return (
        <div data-testid="card">
            <button onClick={() => deleteItemsCart(id)}>✖</button>
            <img src={image} alt={"image of " + title} />
            <p>{title}</p>
            <span>{price}</span>
            <button onClick={() => setCount(count - 1)}>-</button>
            <input type="number" onChange={(e) => setCount(e.target.value)} placeholder="0" min={0} value={count}/>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}