import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    
    html, body, #root { height: 100%; }

    html { font-size: 10px; }
    
    body {
      margin: 0;
      padding: 0;
      background-color: $bg-color;
      font-family: SFUIText, Apple SD Gothic Neo, sans-serif;
      font-size: 14px;
      line-height: 18px;
      color: $black;
    
      *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    
      a {
        color: inherit;
        text-decoration: none;
      }
    
      p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
      }
    
      button, input, select, textarea {
        font-family: unset;
      }
      
      button {
        padding: unset;
        background-color: unset;
        border: unset;
      }
    
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    }

`;

export default GlobalStyles;
