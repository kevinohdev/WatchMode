import CartItemStyles from "../styles/CartItemStyles";
import storeItems from '../data/storeItems.json'


type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const item = storeItems.find(item => item.id === id)
  if (item === null) return null
  console.log(item)
  return (
    <CartItemStyles>
      <img src={item?.imgUrl}></img>
      <div>{item?.name}</div>
      <div>{item?.price}</div>
    </CartItemStyles>
  )
}