import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background-color: #0D2636;
        font-size: 14px;
        -webkite-font-smoothing: antialiased !important;
    }

    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: 'Arial', 'Helvetica', sans-serif;
    }

    button {
        cursor: pointer;
    }
}
`