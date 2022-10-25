import { HiXMark } from "react-icons/hi2";
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
        <div className="wrapper">
          <div className="bold padding-bottom">Your Shopping Cart</div>
          <button type="button" className="close-button" onClick={closeCart}>
            <HiXMark className="font"></HiXMark>
          </button>
          <div className="cart-items padding-top">
            {cartItems.map(item => (
              <>
                <CartItem key={item.id} {...item}></CartItem>
                <hr className="solid"></hr>
              </>
            ))}
          </div>
          <div className="total bold">
            <div>Subtotal: ({cartQty} {(cartQty > 1) ? 'items' : 'item'})</div>
            <div>${formatPrice(totalPrice)}</div>
          </div>
          <button type="button" className="checkout bold">CHECKOUT</button>
        </div>
      </CartStyles>}
    </>
  )
}