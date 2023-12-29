import styled from "styled-components";

export const CardsHeaderWrraper = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
`

const getContinaerHeader = ({ header }) => {
    switch (header) {
        case 'header1': return `
         display:flex;
         flex-direction:column;
         justify-content:center;
         align-items:start;
         gap:41px
        `
        case 'header2': return `
        display:flex;
        justify-content:center;
        align-items:center;
        gap:22px;
        `
        default: return `
         display:flex;
        `
    }
}


const getHeaderLorem = ({ lorem }) => {
    switch (lorem) {
        case 'lorem1': return `
        color: #CF0;
        font-family: Imprima;
        font-size: 17.589px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        `
        case 'title': return `
       color: #FFF;
       font-family: Homenaje;
       font-size: 44px;
       font-style: normal;
       font-weight: 400;
       line-height: 0%; /* 0px */
       `
        case 'lorem2': return `
        padding:11px 43px;
        border-radius: 24px;
        border: 0px solid #CF0;
        background: rgba(46, 46, 46, 0.96);
        color: #FFF;
        font-family: Imprima;
        font-size: 17.589px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        `

        default: return `
        color: #CF0;
        font-family: Imprima;
        font-size: 17.589px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        `
    }
}

export const CardsHeaderContainer = styled.div`
${getContinaerHeader}
`



export const CardsHeaderLorem = styled.span`
 ${getHeaderLorem}
`