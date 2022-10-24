import CartItemStyles from "../styles/CartItemStyles";
import storeItems from '../data/storeItems.json'
import { formatPrice } from "../utils/formatPrice";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { HiXMark, HiMinus, HiPlus } from "react-icons/hi2";


type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const item = storeItems.find(item => item.id === id)
  if (item == null) return null

  const { increaseQty, decreaseQty } = useShoppingCart();
  return (
    <CartItemStyles>
      <div className="grid">
        <img src={item?.imgUrl}></img>
        <div className="item-details">
          <div>{item?.name}</div>
          <div className="quantity">
            <button type="button" onClick={() => decreaseQty(id)}>
              <HiMinus></HiMinus>
            </button>
            <div>{quantity}</div>
            <button type="button" onClick={() => increaseQty(id)}>
              <HiPlus></HiPlus>
            </button>
          </div>
        </div>
        <div className="item-subtotal">
          <button>
            <HiXMark className="font"></HiXMark>
          </button>
          <div className="margin-left">${formatPrice(item?.price * quantity)}</div>
        </div>
      </div>
    </CartItemStyles>
  )
}