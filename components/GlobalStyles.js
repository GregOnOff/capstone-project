import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0 0 5vh 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background: linear-gradient(90deg, #002C48, #113C48)  ;
        color: #fff;
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
