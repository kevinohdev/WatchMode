import styled from "styled-components";

const CartStyles = styled.div`
 .container {
  display: grid;
  grid-template-rows: 50px 1fr 50px 50px 50px;
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

 .close-button {
  position: fixed;
  top: 1rem;
  right: 1rem;
 }


 .order-total {
  position: absolute;
  bottom: 0px;
 }

 .checkout {
  width: 100%;
  border-radius: 0;
  grid-row-start: 4 / 1;
 }
`;

export default CartStyles;