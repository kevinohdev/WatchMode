import styled from "styled-components";

const CartItemStyles = styled.div`
 .grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding-top: 1rem;
 }

 img {
  width: 12vw;
  height: 12vw;
  object-fit: cover;
  margin: auto;
 }

 .item-details, .item-subtotal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 700;
 }

 .quantity {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid black;
  width: 10vw;
  height: 3vw;
 }

 button {
  outline: none;
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: 700;
  padding: 0 10px;
 }

 .margin-left {
  margin-left: 2rem;
 }

 .font {
  color: black;
 }
`;

export default CartItemStyles;