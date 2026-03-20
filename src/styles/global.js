import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Lexend", sans-serif;
        overflow-x: hidden;
    }

    .carousel-item {
        padding-right: 8px;
    }
`