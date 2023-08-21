import styled from "styled-components";

export const NavBarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 80px;
  position: relative;
`;

export const MenuBar = styled(NavBarStyled)`
  width: 20%;
  height: 80%;
`;