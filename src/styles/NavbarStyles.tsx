import styled from 'styled-components'

const NavbarStyles = styled.div`
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: auto;
    padding: 1rem;
  }

  .button {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    color: black;
  }

  .button:hover {
    color: #22efec77;
  }

  span {
    padding: 1rem;
  }

  .qty {
    display: grid;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background-color: #22efec;
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
    margin: auto;
    text-align: center;
  }

  img {
    height: 50px;
  }
`;

export default NavbarStyles
