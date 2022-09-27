import styled from 'styled-components'

const NavbarStyles = styled.div`
  .nav {
    display: flex;
    justify-content: space-between;
    min-height: auto;
    background-color: gold;
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
`;

export default NavbarStyles
