import { createContext, ReactNode, useContext, useState } from "react"
import { Cart } from "../components/Cart"
import { CartItem } from "../components/CartItem"
import { Item } from "../components/Item"
import storeItems from '../data/storeItems.json'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  cartItems: CartItem[]
  cartQty: number
  totalPrice: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  // a function addToCart that checks if the item is already in the cart
  //if there is an item already , increase the amount
  //if there isn't an item already, add an amount: 1 to the object

  const increaseQty = (id: number) => {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }]
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const decreaseQty = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const cartQty = cartItems.reduce(
    (qty, item) => item.quantity + qty,
    0
  )

  const totalPrice = cartItems.reduce(
    (total, cartItem) => {
      const item = storeItems.find(item => item.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity
    }, 0
  )


  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
        increaseQty,
        decreaseQty,
        cartItems,
        cartQty,
        totalPrice
      }}
    >
      {children}
      <Cart cartOpen={cartOpen}></Cart>
    </ShoppingCartContext.Provider>
  )
}