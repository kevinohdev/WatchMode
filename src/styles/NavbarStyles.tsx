import styled from 'styled-components'

const NavbarStyles = styled.div`
  .nav {
    display: flex;
    justify-content: space-between;
    min-height: auto;
    padding: 1rem;
  }

  .button {
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 1rem;
  }

  span {
    padding: 1rem;
  }

  .qty {
    display: grid;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background-color: orange;
    border-radius: 50%;
    height: 1.4rem;
    width: 1.4rem;
    margin: auto;
    text-align: center;
  }

  img {
    height: 60px;
  }
`;

export default NavbarStyles
