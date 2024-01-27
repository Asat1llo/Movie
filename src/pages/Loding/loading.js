import styled from "styled-components";

export const LoadingWrraper = styled.div`
width: 100%;
height: 100vh;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
`


export const LoaderSpan = styled.span`
  font-size: 48px;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #FFF;
  letter-spacing: 2px;
  position: relative;
  box-sizing: border-box;

&::after {
  content: 'Loading';
  position: absolute;
  left: 0;
  top: 0;
  color: #263238;
  text-shadow: 0 0 2px #FFF, 0 0 1px #FFF, 0 0 1px #FFF;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}

@keyframes animloader {
  0% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
`