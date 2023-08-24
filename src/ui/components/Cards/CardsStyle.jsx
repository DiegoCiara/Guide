import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 220px;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background-color: #0051ff1c;
  border:1px solid #0051ff76;
  border-radius: 5px;
`;

export const ContainerCard = styled(Card)`
  display: flex;
  width: 100%;
  max-width: 90%;
  flex-direction: column;
  justify-content: center;
  gap: 0px;
  padding: 20px;
  background-color: #0051ff1c;
  border:1px solid #0051ff76;
  border-radius: 5px;
  padding: 0 20px;
`;