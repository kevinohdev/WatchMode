import styled from 'styled-components'

const ItemStyles = styled.div`
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding-bottom: 4px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  button {
    border: none;
    background: transparent;
    font-size: 1.5rem;
    padding: 2rem 0 2rem 2rem;
  }

  button:hover {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export default ItemStyles;