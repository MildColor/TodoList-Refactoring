import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Pretendard-Regular";
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
        font-weight: 400;
        font-style: normal;
    }

    *{
        box-sizing: border-box;
        font-family: "Pretendard-Regular", sans-serif;
    }

    button{
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
    }

    body{
        box-sizing: border-box;
        font-family: "Pretendard-Regular", sans-serif;
    }
 
    a{
        text-decoration: none;
        color:inherit;
    }



  
  
`;

export default GlobalStyle;
