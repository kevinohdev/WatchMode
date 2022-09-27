import ItemStyles from "../styles/ItemStyles"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}
export function Item({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <ItemStyles>
      <div className="container">
        <img src={imgUrl} alt={name}></img>
        <h3>{name}</h3>
      </div>
    </ItemStyles>
  )
}