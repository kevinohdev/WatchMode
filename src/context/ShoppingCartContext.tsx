import { createContext, ReactNode, useContext, useState } from "react"
import { Cart } from "../components/Cart"
import { CartItem } from "../components/CartItem"
import { Item } from "../components/Item"

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
  cartItems: CartItem[]
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


  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
        increaseQty,
        cartItems
      }}
    >
      {children}
      <Cart cartOpen={cartOpen}></Cart>
    </ShoppingCartContext.Provider>
  )
}