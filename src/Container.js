import styled from "styled-components";
import bgcard from './assets/img/cards/bg_cards.png'
import inner from './assets/img/cards/cards_img.png' 


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
    case 'CardInner':return`
     background-image:url(${inner});
     background-size: cover;
     background-repeat: no-repeat;
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

export const Img = styled.img``