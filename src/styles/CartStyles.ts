import styled from "styled-components";

const CartStyles = styled.div`
 .wrapper {
  display: flex;
  flex-direction: column;
  z-index: 5;
  position: absolute;
  top: 0;
  right: 0;
  min-height: 100%;
  width: 50vw;
  background-color: white;
  color: black;
  overflow-y: auto;
  padding-bottom: 1rem;
  box-shadow: rgba(0, 0, 0, 0.8) -5px 0px 20px;

  @media (max-width: 700px) {
    width: 100vw;
  }
 }
 
 .cart-items {
  flex: 1;
 }

 hr {
  margin-top: 1rem;
  width: 95%;
 }

 .banner {
  display: flex;
  justify-content: space-between;
  align-items: start;
 }

 .close-button {
  font-size: 2rem;
  border: none;
  background: transparent;
  color: black;
  display: grid;
  justify-content: center;
  align-items: start;
 }

 .close-button:hover {
    color: rgb(30, 30, 30);
 }


 .order-total {
  position: absolute;
  bottom: 0px;
 }

 .checkout {
  width: 95%;
  position: relative;
  bottom: 0;
  padding-bottom: 1rem;
  margin: auto;
  border: 1px solid;
 }

 .total {
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: auto;
 }

 .bold {
  font-weight: 700;
  padding: 1rem;
 }

 .padding-top {
  padding-top: 1rem;
 }
`

export default CartStyles;