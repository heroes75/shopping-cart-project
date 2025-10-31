import styles from "./Card-of-cart.module.css"


export default function CardOfCart({image, title, price, id, numberOfItems, deleteItemsCart, increaseItemsCart, decreaseItemsCart, updateItemsCart}) {
    return (
        <div className={styles.cardContainer} data-testid="card">
            <button className={styles.close} onClick={() => deleteItemsCart(id)}>✖</button>
            <img src={image} alt={"image of " + title} />
            <p className={styles.title}>{title}</p>
            <div className={styles.price}>$<span>{price}</span></div>
            <button className={styles.button} onClick={() => decreaseItemsCart(id)}>-</button>
            <input type="number" onChange={(e) => updateItemsCart(id, +e.target.value)} placeholder="0" min={0} value={numberOfItems}/>
            <button className={styles.button} onClick={(e) => {e.preventDefault(); increaseItemsCart(id)}}>+</button>
        </div>
    )
}