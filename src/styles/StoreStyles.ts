import styled from "styled-components";

const StoreStyles = styled.div`

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  grid-template-rows: repeat(auto-fill, 400px);
  grid-gap: 2rem .5rem;
  justify-content: center;
  padding: 1rem;
}`;

export default StoreStyles;