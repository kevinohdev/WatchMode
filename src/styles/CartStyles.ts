import styled from "styled-components";

const CartStyles = styled.div`
 .container {
  z-index: 5;
  position: absolute;
  top: 0;
  right: 0;
  width: 60vw;
  min-height: 100%;
  width: 50vw;
  background: rgba(50, 50, 50);
  overflow-y: auto;
 }

 .grid {
  display: grid;
  grid-template-rows: repeat(1fr);
  margin-bottom: 10px;
 }

 .grid:last-child {
  padding-bottom: 50px;
  grid-template-columns: 1fr;
 }

 .close-button {
  position: fixed;
  top: 5rem;
  right: 5rem;
 }


 .order-total {
  position: absolute;
  bottom: 0px;
 }

 .checkout {
  width: 100%;
  border-radius: 0;
 }
`;

export default CartStyles;