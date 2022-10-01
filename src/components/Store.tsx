import items from '../data/items.json'
import StoreStyles from '../styles/StoreStyles'
import { Item } from './Item'

export function Store() {
  return (
    <>
      <StoreStyles>
        <div className='grid'>
          {items?.map(item => (
            <Item {...item}></Item>
          ))}
        </div>
      </StoreStyles>
    </>
  )
}