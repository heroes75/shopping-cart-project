
export default function CardOfCart({image, title, price, id, numberOfItems, deleteItemsCart, increaseItemsCart, decreaseItemsCart, updateItemsCart}) {
    return (
        <div data-testid="card">
            <button onClick={() => deleteItemsCart(id)}>✖</button>
            <img src={image} alt={"image of " + title} />
            <p>{title}</p>
            <span>{price}</span>
            <button onClick={() => decreaseItemsCart(id)}>-</button>
            <input type="number" onChange={(e) => updateItemsCart(id, +e.target.value)} placeholder="0" min={0} value={numberOfItems}/>
            <button onClick={(e) => {e.preventDefault(); increaseItemsCart(id)}}>+</button>
        </div>
    )
}