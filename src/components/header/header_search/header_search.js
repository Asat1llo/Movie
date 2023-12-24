import styled from "styled-components";

const getactive = ({ active }) => {
    switch (active) {
        case 'class1': return `
        width:200px;
        height:30px;
        border-radius:5px;
        border:none;
        transition: 0.4s linear;
        background-color:transparent;
        color:white;    
        &:focus{
            outline:none;
        }
        `
        case 'class2': return `
        width:15px;
        height:15px;
        border-radius:50%;
        transition: 0.4s linear;
        transform: translate(-10px)
        background-color:transparent;
        cursor:pointer;

        `
   
      
        default: return `
        width:15px;
        height:15px;
        border-radius:50%;
        background-color:transparent;
        `
    }

}

const getStick = ({stick})=>{
    switch (stick) {
        case 'stick1': return `
        display:inline-block;
        width:3px;
        height:10px;
        background-color:white;
        transform:rotate(-40deg) translate(-7px,6px);
        `
          
        case 'stick2': return `
        display:inline-block;
        width:3px;
        height:25px;
        background-color:white;
        transform:rotate(-50deg) translate(-12px,18px);
        transition: 0.4s linear;
        `      
        default: return `
        display:inline-block;
        width:2px;
        height:8px;
        background-color:white;
        transform:rotate(-40deg) translate(-7px,6px);
        `
    }
}

export const SearchWrraper = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
//  background-color:red;
 cursor:pointer;
`
export const SearchRol = styled.input`
${getactive}
border: 1px solid white;
`

export const SearchStick = styled.div`
 ${getStick}
`