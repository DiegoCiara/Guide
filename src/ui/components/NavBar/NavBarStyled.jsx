import styled from "styled-components";

export const NavBarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  height: 100px;
  padding: 4px 0px;
  border-bottom: 1px solid #5353533e;
`;
export const HeadBar = styled(NavBarStyled)`
  width: auto;
  height: 100%;
  border: none;
  gap: 30px;
  @media (max-width: 850px) {
    margin: 20px !important;
  }
`;
export const MenuBar = styled(NavBarStyled)`
  width: auto;
  height: 100%;
  gap: 30px;
  border: none;
  @media (max-width: 850px) {
    display:none;
  }
`;
export const MenuButton = styled(HeadBar)`
    display:none;
    height:auto;
    border: none;
  @media (max-width: 850px) {
    display:inline !important;
  }
`;
