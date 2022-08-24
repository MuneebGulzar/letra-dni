import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
    }
`;