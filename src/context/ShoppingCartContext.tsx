import { createContext, ReactNode, useContext, useState } from "react"

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContext = {

}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {


  return (
    <ShoppingCartContext.Provider
      value={{
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}