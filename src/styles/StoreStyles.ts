import styled from "styled-components";

const StoreStyles = styled.div`
  margin: 0 auto;
  max-width: 1200px;



.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 2rem .5rem;
  justify-content: center;
  padding: 1rem;
}`;

export default StoreStyles;