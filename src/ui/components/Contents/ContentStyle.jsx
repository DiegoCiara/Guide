import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    max-height: 100%;
    display: flex;
`;

export const ContentPage = styled(Content)`
    max-width: 100%;
    padding: 20px;
    text-align: left;
    width: 100%;
`;

export const CodeSpaceStyle = styled.div`
    display: flex;
    width: 100%;
    margin: 20px auto;
    padding-top: 15px;
    border-radius: 5px;
    background-color: #090e11;
    flex-direction: column;
    position: relative;
`;