import { useShoppingCart } from "../context/ShoppingCartContext"
import ItemStyles from "../styles/ItemStyles"
import { formatPrice } from "../utils/formatPrice"
import { IoBagAdd } from "react-icons/io5";

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
        <div className="flex">
          <p>${formatPrice(price)}</p>
          <button type="button" onClick={() => increaseQty(id)}>
            <IoBagAdd></IoBagAdd>
          </button>
        </div>
      </div>
    </ItemStyles>
  )
}