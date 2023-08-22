import styled from "styled-components";

export const DrawlerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 25vw;
  height: 80vw;
  background-color: #F6F6F7;
  
  @media (max-width: 850px) {
   display: none;
  }

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
  height: 90vh;
  padding: 20px;
  align-items: start;
  width: 100%;
  background-color: transparent;
`; 
export const CardsList = styled(CardsDrawler)`
  justify-content: start;
  gap: 10px;
  padding-right: 10px;
  overflow: hidden !important;
  overflow-y: scroll !important;
  ::-webkit-scrollbar {
  width: 5px; /* Largura da barra de rolagem */
}
`; 