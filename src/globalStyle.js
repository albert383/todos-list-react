import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

  *, ::after, ::before {
        box-sizing: inherit;
    }

    html, body {
        font-family: "Roboto", sans-serif;
        background-color: #eeedef;
        word-break: break-word;
        height: 100%;
    }
`;
