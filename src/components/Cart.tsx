import { useShoppingCart } from "../context/ShoppingCartContext";
import CartStyles from "../styles/CartStyles";
import { formatPrice } from "../utils/formatPrice";
import { CartItem } from "./CartItem";

type CartProps = {
  cartOpen: boolean
}

export function Cart({ cartOpen }: CartProps) {
  const { closeCart, cartItems, cartQty, totalPrice } = useShoppingCart();

  return (
    <>
      {cartOpen && <CartStyles>
        <div className="container">
          <div className="bold">Your Shopping Cart</div>
          <button type="button" className="close-button" onClick={closeCart}>x</button>
          <div className="grid">
            {cartItems.map(item => (
              <CartItem key={item.id} {...item}></CartItem>
            ))}
          </div>
          <div className="total bold">
            <div>Total Quantity: {cartQty}</div>
            <div>Total Price: ${formatPrice(totalPrice)}</div>
          </div>
          <button type="button" className="checkout bold">CHECKOUT</button>
        </div>
      </CartStyles>}
    </>
  )
}