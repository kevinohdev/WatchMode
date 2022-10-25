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
      <div className="card">
        <div className="stacked">
          <img src={imgUrl} alt={name}></img>
          <div className="lightbox" onClick={() => increaseQty(id)}>
            <IoBagAdd></IoBagAdd>
          </div>
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          <p>${formatPrice(price)}</p>
        </div>
      </div>
    </ItemStyles>
  )
}