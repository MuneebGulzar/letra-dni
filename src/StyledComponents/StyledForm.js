import styled from "styled-components";

export const StyledForm = styled.form`
    width: 50vw;
    height: 50vh;
    margin-block: 25vh;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 468px) {
        width: 100vw;
    }
`;

export const StyledInput = styled.input`
    width: 90%;
    padding: 2%;
    border-radius: 50px;
    font-size: 18px;
    text-align: center;

`;

export const StyledButton = styled.button`
    width: 35%;
    background-color: green;
    color: #ffffff;
    margin-top: 10%;
    padding: 1.3%;
    border-radius: 50px;
    font-size: 24px;
    font-weight: 900;
`;