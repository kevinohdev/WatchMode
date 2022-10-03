import CartItemStyles from "../styles/CartItemStyles";
import storeItems from '../data/storeItems.json'
import { formatPrice } from "../utils/formatPrice";
import { useShoppingCart } from "../context/ShoppingCartContext";


type CartItemProps = {
  id: number
  quantity: number
  event: Event
}

export function CartItem({ id, quantity, event }: CartItemProps) {
  const item = storeItems.find(item => item.id === id)
  if (item === null) return null
  console.log('item', item)
  const { increaseQty } = useShoppingCart();
  return (
    <CartItemStyles>
      <div className="grid">
        <img src={item?.imgUrl}></img>
        <div className="item-details">
          <div>{item?.name}</div>
          <div>Quantity:</div>
        </div>
        <div className="item-subtotal">
          <div className="margin-left">${formatPrice(item?.price * quantity)}</div>
          <div className="quantity">
            <button type="button">-</button>
            <div>{quantity}</div>
            <button type="button">+</button>
          </div>
        </div>
      </div>
    </CartItemStyles>
  )
}