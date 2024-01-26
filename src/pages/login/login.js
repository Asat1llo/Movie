import styled from "styled-components";

export const LoginWrraper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 150px 0px 150px 0px;
`


export const LoginContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding: 40px;
 align-items: center;
 gap: 2.5vw;
 border-radius: 5px;
 background-color: rgba(0,0,0,30%);
`

const loginContainerItemsSwitch = ({container})=>{
    switch (container) {
        case 'loginSignup':return`
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:1.5vw;
        `
            
        case 'containerInput':return`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:2vw;
        `
        default:return``
    }
}

export const LoginContainerItems = styled.div`
 ${loginContainerItemsSwitch}
`

const loginInputsSwitch = ({input})=>{
    switch (input) {
        case 'email':return`
        width:290px;
        height:50px;
        padding:10px 10px 10px 30px;
        border-radius:5px;
        border:none;
        &:focus{
            outline:none;
        }
        `   
            
        case 'password':return`
        width:290px;
        height:50px;
        padding:10px 10px 10px 30px;
        border-radius:5px;
        border:none;
        &:focus{
            outline:none;
        }
        `

        case 'history':return`
        `

        case 'btn':return`
        padding:16px 50px 16px 50px;
        border-radius:25px;
        background-color:red;
        border:none;
        color:white;
        font-size:20px;
        font-weight:600;
        `

        default:return``
    }
}

export const LoginInputs = styled.input`
${loginInputsSwitch}
`

const loginSpanSwitch = ({text})=>{
    switch (text) {

        case 'login':return`
        color:white;
        font-size:3vw;
        font-weight:600; 
        border:none;
        padding-right:15px;
        border-right:1px solid white;
        `
        case 'signup':return`
        color:white;
        font-size:3vw;
        font-weight:600; 
        `

        case 'historyText':return`
        color:whitesmoke;
        font-size: 18px;
        `
    
        case 'forgote':return`
        color:whitesmoke;
        font-size: 18px;
        `

        default:return``
    }
}

export const LoginText = styled.span`
${loginSpanSwitch}
`