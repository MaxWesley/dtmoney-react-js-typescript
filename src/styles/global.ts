import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429CC;

        --blue-light: #6933FF;
        
        --text-title: #363F55;
        --text-body: #969CB3;

        --background-color: #F0F2F5;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (Desktop)

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (min-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    // REM = 1rem = font-size

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`