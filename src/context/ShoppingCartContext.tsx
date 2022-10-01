import { createContext, ReactNode, useContext, useState } from "react"
import { Cart } from "../components/Cart"

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
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart
      }}
    >
      {children}
      <Cart cartOpen={cartOpen}></Cart>
    </ShoppingCartContext.Provider>
  )
}