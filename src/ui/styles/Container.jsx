import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const Page = styled(Container)`
    flex-direction: column;
    width:auto;
    height: 89.9vh;
    overflow: hidden;
`;

export const PageContainer = styled(Page)`
    justify-content: start;
    align-items: start;
    padding: 40px 100px ;
    overflow-y: scroll !important;
    padding-bottom: 0;
    gap: 50px;
    max-width: 80%;
`;

export const Divisor = styled.div`
    width: 80%;
    height: 1px;
    border-top: 1px solid #dddddd;
`;