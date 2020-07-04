import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

.App {
    text-align: center;
  
    flex-direction: column;
    display: flex;
    font-family: proxima-nova-light, sans-serif;
    font-style: normal;
    font-weight: 300;

    @media screen and (max-width: 800px) {

        // some css
        // padding: 0px;
        // margin-right:-100px;

    }
  
  }
  
  * {
    box-sizing: border-box;
  }
  

`