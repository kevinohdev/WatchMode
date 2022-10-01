import { Cart } from "./components/Cart"
import Navbar from "./components/Navbar"
import { Store } from "./components/Store"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar></Navbar>
      <Store></Store>
    </ShoppingCartProvider>
  )
}

export default App
