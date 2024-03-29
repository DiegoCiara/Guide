import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    height: 93%;
`;
export const Page = styled(Container)`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-right: 1px solid #5353533e;
    @media (max-width: 850px) {
      flex-direction: column-reverse;
    }
`;
export const PageContainer = styled(Page)`
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 20px 50px ;
    overflow-y: scroll !important;
    gap: 30px;
    min-width: 50%;
    width: 100%;
    @media (max-width: 850px) {
      padding: 20px;  
      width: auto;
      }
`;
export const Divisor = styled.div`
    width: 100%;
    height: 1px;
    border-top: 1px solid #dddddd;
`;