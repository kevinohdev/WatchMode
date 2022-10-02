import styled from 'styled-components'

const ItemStyles = styled.div`
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: gray;
    height: 100%;
    width: 100%;
    padding-bottom: 4px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    width: 100%;
    border-radius: 0;
  }
`;

export default ItemStyles;