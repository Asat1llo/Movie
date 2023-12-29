import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
` 

const getSection = ({section})=>{
   switch (section) {
    case 'section_header':return`
     position:fixed;
     top:0;
     left:0;
     right:0;
     z-index:2;
    `

    default:return``
   }
}

export const Section = styled.section`
${getSection}
`