import styled from "styled-components";

export const StyledForm = styled.form`
    width: 50vw;
    height: 50vh;
    margin-block: 22vh;
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

    @media (max-width: 468px) {
        font-size: 16px;
    }

`;

export const StyledButton = styled.button`
    width: 45%;
    background-color: #45B39D;
    color: #ffffff;
    margin-top: 10%;
    padding: 1.3%;
    border-radius: 50px;
    font-size: 24px;
    font-weight: 900;

    @media (max-width: 468px) {
        font-size: 16px;
    }

`;
export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 2%;
`;
export const Link = styled.a`
    color: gray;
    text-decoration: none;
    font-size: 20px;

    @media (max-width: 468px) {
     font-size: 16px;
    }
`;