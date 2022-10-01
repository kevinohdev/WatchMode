import { useShoppingCart } from "../context/ShoppingCartContext";
import CartStyles from "../styles/CartStyles";

type CartProps = {
  cartOpen: boolean
}

export function Cart({ cartOpen }: CartProps) {
  const { closeCart } = useShoppingCart();
  return (
    <>
      {cartOpen && <CartStyles>
        <div className="container">
          <div>cart</div>
          <button type="button" onClick={closeCart}>x</button>
        </div>
      </CartStyles>}
    </>
  )
}