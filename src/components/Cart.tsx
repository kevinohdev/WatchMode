import { useShoppingCart } from "../context/ShoppingCartContext";
import CartStyles from "../styles/CartStyles";
import { CartItem } from "./CartItem";

type CartProps = {
  cartOpen: boolean
}

export function Cart({ cartOpen }: CartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <>
      {cartOpen && <CartStyles>
        <div className="container">
          <div>Your Shopping Cart</div>
          <button type="button" onClick={closeCart}>x</button>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item}></CartItem>
          ))}
        </div>
      </CartStyles>}
    </>
  )
}