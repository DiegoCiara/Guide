import styled from "styled-components";

export const DrawlerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 15vw;
  height: 90vh;
  background-color: #f0f8ff;
  border-right: 1px solid #cfcfcf;
`;

export const MenuDrawler = styled(DrawlerStyled)`
  width: 100%;
  height: auto;
  gap: 2px;
  padding: 0;
  margin-top: 20px;
  justify-content: start;
  border: none;
`;