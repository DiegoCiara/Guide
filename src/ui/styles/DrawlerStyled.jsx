import styled from "styled-components";

export const DrawlerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: left;
  width: 30vw;
  height: 100vh;
  background-color: #F6F6F7;
`;

export const MenuDrawler = styled(DrawlerStyled)`
  width: 50%;
  height: auto;
  gap: 2px;
  align-items: start;
  padding: 20px;
  margin-top: 20px;
  justify-content: start;
  border: none;
`;

export const CardsDrawler = styled(DrawlerStyled)`
`;