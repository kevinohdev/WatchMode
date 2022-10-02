import CartItemStyles from "../styles/CartItemStyles";
import storeItems from '../data/storeItems.json'
import { formatPrice } from "../utils/formatPrice";


type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const item = storeItems.find(item => item.id === id)
  if (item === null) return null
  console.log('item', item)
  return (
    <CartItemStyles>
      <div className="grid">
        <img src={item?.imgUrl}></img>
        <div className="item-details">
          <div>{item?.name}</div>
          <div>{item?.price}</div>
          <div>Quantity: {quantity}</div>
        </div>
        <div className="item-subtotal">
          <div>${formatPrice(item?.price * quantity)}</div>
        </div>
      </div>
    </CartItemStyles>
  )
}