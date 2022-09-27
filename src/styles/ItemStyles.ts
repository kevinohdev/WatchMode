import styled from 'styled-components'

const ItemStyles = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    background-color: gray;
    height: 90%;
    width: 90%;
    border-radius: 9px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ItemStyles;