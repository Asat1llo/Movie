import styled from "styled-components";

export const AdminModalWrraper = styled.div`
width: 100%;
height: 100vh;
display:flex;
justify-content: center;
align-items: center;
position: fixed;
/* top: -99%; */
left: 0;
bottom: 0;
right: 0;
background-color: black;
opacity: 70%;
`
export const AdminModalContainer = styled.div`
width: 600px;
height: 450px;
border-radius: 20px;
background-color: red;
padding: 20px;
`

export const AdminForm = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap:2vw;
`

export const AdminInput = styled.input`
width: 200px;
height: 60px;
border: none;
border-radius: 15px;
padding: 10px;
`
