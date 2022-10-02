import { useShoppingCart } from "../context/ShoppingCartContext"
import ItemStyles from "../styles/ItemStyles"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}
export function Item({ id, name, price, imgUrl }: StoreItemProps) {
  const { increaseQty } = useShoppingCart();
  return (
    <ItemStyles>
      <div className="container">
        <img src={imgUrl} alt={name}></img>
        <h3>{name}</h3>
        <button type="button" onClick={() => increaseQty(id)}>Add To Cart</button>
      </div>
    </ItemStyles>
  )
}