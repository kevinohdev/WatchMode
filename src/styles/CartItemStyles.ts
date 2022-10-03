import styled from "styled-components";

const CartItemStyles = styled.div`
 .grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
 }

 img {
  width: 150px;
  height: 225px;
  object-fit: cover;
 }

 .item-details, .item-subtotal {
    display: grid;
    align-items: center;
    button {
      font-size: 16px;
    }
 }

 .quantity {
  display: flexbox;
  justify-content: flex-start;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
 }

 button {
  font-size: 2rem;
 }

 .margin-left {
  margin-left: 2rem;
 }
`;

export default CartItemStyles;