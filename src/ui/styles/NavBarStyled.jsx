import styled from "styled-components";

export const NavBarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid #eeeeee;
`;

export const MenuBar = styled(NavBarStyled)`
  width: auto;
  height: 100%;
  gap: 30px;
`;