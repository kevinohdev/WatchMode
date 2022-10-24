import { useShoppingCart } from '../context/ShoppingCartContext'
import NavbarStyles from '../styles/NavbarStyles'
import logo from '../assets/logo.png'
import { HiShoppingCart } from 'react-icons/hi2';

function Navbar() {
  const { openCart, cartQty } = useShoppingCart();

  return (
    <NavbarStyles>
      <div className='nav'>
        <img src={logo} alt='Watch Mode Logo'></img>
        {cartQty > 0 && <div className='qty'>{cartQty}</div>}
        <button type='button' className='button' onClick={openCart}>
          <HiShoppingCart></HiShoppingCart>
        </button>
      </div>
    </NavbarStyles >
  )
}

export default Navbar