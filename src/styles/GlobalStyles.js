import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize}

html {
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    font-family:  'Open Sans', sans-serif;
    font-weight: 400;
}

h1,
h2,
h3 {
    margin: 0;
}

p {
    margin: 0;
}

a {
    display: inline-block;
    text-decoration: none;
}

button {
    display: inline-block;
}

img{
    display: block;
    max-width: 100%;
}

ul {
    padding: 0;
    list-style: none;
}
`;

export default GlobalStyles;
