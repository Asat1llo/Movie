import styled from "styled-components";

const getactive = ({ active }) => {
    switch (active) {
        case 'class1': return`
        width:200px;
        height:30px;
        border-radius:7px;
        background-color:transparent;
        border-color:white;
        color:white;    
        transition: all 1s;
        &:focus{
            outline:none;
        }
        `
        case 'class2': return `
        width:15px;
        height:15px;
        border-radius:50%;
        border-color: white;
        transition: all 1s;
        background-color:transparent;
        cursor:pointer;
        &:focus{
            outline:none;
        }
        `
        default: return `
        width:15px;
        height:15px;
        border-radius:50%;
        border-color:white;
        background-color:transparent;
        cursor:pointer;
        &:focus{
            outline:none;
        }
        `
    }

}

const getImg = ({active2}) => {
    switch (active2) {
        case 'search1': return `
        position:absolute;
        z-index:-1;
        width:35px;
        transform:translate(5px,3px); 
        transition:all 1s;
        `

        case 'search2': return `
        position:absolute;
        z-index:1;
        transform:translate(90px,2px); 
        transition:all 1s;
        `

        default: return `
        position:absolute;
        z-index:-1;
        width:35px;
        transform:translate(5px,3px); 
        transition:all 2s;  
        `
    }
}

export const SearchWrraper = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 cursor:pointer;
 position:relative;
 background-color:transparent;
`
export const SearchRol = styled.input`
${getactive}
border: 1px solid white;
`

export const SearchImg = styled.img`
 ${getImg}
`