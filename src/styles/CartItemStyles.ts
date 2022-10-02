import styled from "styled-components";

const CartItemStyles = styled.div`
 .container {
    background-color: goldenrod;
 }

 .grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr
 }

 img {
  width: 200px;
  height: 300px;
  object-fit: cover;
 }

`;

export default CartItemStyles;