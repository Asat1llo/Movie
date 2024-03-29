import styled from "styled-components";

import watch from '../../../assets/svg/cards/watch.svg'
import star from '../../../assets/svg/cards/star.svg'


const getCard = ({ desc }) => {
    switch (desc) {
        case 'desc_wrraper': return `
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:start;
        gap:21px;
        `
        case 'desc_container_1': return `
        display:flex;
        justify-content:space-between;
        gap:1vw;
        align-items:center;
        `
        case 'desc_container_2': return `
        display:flex;
        justify-content:space-around;
        gap:7.12vw;
        align-items:center;
        `
        default: return `display:flex`
    }
}



const getCardsSpan = ({ cardsspan }) => {
    switch (cardsspan) {
        case 'cards_name': return `
        display:inline-block;
        width:245px;
        color: #FFF;
        font-family: Electrolize;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        `
        case 'cards_year': return `
        color: #CF0;
        font-family: Imprima;
        font-size: 17.589px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        `
        case 'cards_hd': return `
        border: 1px solid #FFF;
        background: rgba(217, 217, 217, 0.00);
        padding:1px 4px 2px 5px;
        color: #FFF;
        font-family: Imprima;
        font-size: 12.792px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        `
        case 'cards_time': return `
        color: #FFF;
        font-family: Imprima;
        font-size: 15.393px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display:flex;
        justify-content:center;
        alig-items:center;
        gap:0.1vw;
        `
        case 'cards_rating': return `
        color: #FFF;
        font-family: Imprima;
        font-size: 15.393px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        `
        default: return ``
    }
}





export const CardsWrraper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:33px;
`


export const CardsDesc = styled.div`
 ${getCard}
`


export const CardsSpan = styled.span`
${getCardsSpan}
`


export const CardsContainerImg = styled.img`
width: 294.977px;
height: 391.691px;
`