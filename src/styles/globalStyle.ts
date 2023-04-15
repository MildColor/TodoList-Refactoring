import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Pretendard-Regular";
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
        font-weight: 400;
        font-style: normal;
    }


    html{
        font-size: 62.5%;
        /** rem (1rem = 10px) */
    }


    * { 
        box-sizing: border-box;
        font-family: "Pretendard-Regular", sans-serif;
    }  
    
    body {
        box-sizing: border-box;
        font-family: "Pretendard-Regular", sans-serif;
        font-size: 1.6rem;
    }

    button {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
    }
 
    a {
        text-decoration: none;
        color:inherit;
    }

    



`;

export default GlobalStyle;
