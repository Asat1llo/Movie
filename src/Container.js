import styled from "styled-components";
import bgcard from './assets/img/cards/bg_cards.png'


const getSection = ({section})=>{
   switch (section) {
    case 'section_header':return`
     position:fixed;
     top:0;
     left:0;
     right:0;
     z-index:2;
    `
    case 'section_card':return`
    background-image:url(${bgcard});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    `
    case 'login':return`
     position:fixed;
     left:0;
     right:0;
     bottom:0;
     top:0;
     z-index:1;
    `

    default:return``
   }
}

export const Section = styled.section`
${getSection}
`

export const Container = styled.div`
    max-width: 100%;
    width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
` 


const img = ({img})=>{
    switch (img) {
        case 'close':return`
         position:absolute;
         left:98%;
         top:-4%;
         cursor:pointer;
        `
        default:return``
    }
}

export const Img = styled.img`
${img}
`