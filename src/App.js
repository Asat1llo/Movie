import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Electrolize-Regular',sans-serif;
}

ul {
  list-style-type: none;
}

a {
  display: inline-block;
  text-decoration: none;
}

span{
  display:inline-block;
}

img {
  display: inline-block;
}

button {
  border: none;
  cursor: pointer;
}
`

export default Global