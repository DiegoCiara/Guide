import styled from "styled-components";

export const DrawlerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 20vw;
  min-height: 100%;
  background-color: #F6F6F7;
`;

export const MenuDrawler = styled(DrawlerStyled)`
  width: 80%;
  min-height: 100%;
  height: auto;
  gap: 2px;
  min-height: auto;
  align-items: start;
  padding: 5px;
  margin-top: 20px;
  justify-content: start;
  border: none;
`;

export const CardsDrawler = styled(DrawlerStyled)`
  justify-content: start;
  height: auto;
  align-items: start;
  width: 50%;
  background-color: transparent;
`;