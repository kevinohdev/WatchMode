import styled from 'styled-components'

const ItemStyles = styled.div`

  .card {
    aspect-ratio: 1 / 1.3;
  }

  .stacked {
    display: grid;
  }

  .stacked > * {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  }

  .lightbox {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: transparent;

    svg {
      color: transparent;
    }
  }


    .lightbox:hover {
      background-color: rgba(0, 0, 0, 0.5);

      svg {
        font-size: 3rem;
        color: white;
      }
    }

  img {
    max-width: 100%;
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 4px;
  }

`;

export default ItemStyles;