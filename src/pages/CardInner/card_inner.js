import styled from "styled-components";

export const CSection = styled.section`
background-image:url(${({bg})=>bg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const CardInnerWrraper = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 5vw;
padding: 160px 0px 62px 0px;
`

const CardInnerContainerClass = ({container})=>{
    switch (container) {
        case 'container1':return`

        `
    
        case 'container2':return`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:start;
        gap:1.5vw;
        `
        case 'container3':return`
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:2vw;
        `
        case 'container4':return`
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:8vw;
        padding:24.99px 20.45px 35.94px 29.54px;
        border-radius: 19.312px;
        background: rgba(63, 63, 63, 0.44);
        `
         default:return``
    }
}

 export const CardInnerContainer = styled.div`
  ${CardInnerContainerClass}
 `

 const CardInnerContainerSpanCalaa = ({span})=>{
    switch (span) {
        case 'episod':return`
        color: #B0DC00;
        font-family: 'Gurajada', sans-serif;
        font-size: 30.148px;
        font-style: normal;
        font-weight: 400;
        line-height: 0%;
        letter-spacing: 8.894px;
        `
        case 'name':return`
        color: #CF0;
        font-family: 'Gurajada',sans-serif;
        font-size: 95.455px;
        font-style: normal;
        font-weight: 400;
        line-height: 69.5%;
        cursor:pointer;
        `
        case 'movie': return`
        padding:3.41px 3.41px 5.89px 6.82px;
        background-color:white;
        color: #000;
        font-family: 'Imprima', sans-serif;
        font-size: 16.234px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        `
        case 'hd': return`
         padding:1.14px 4.54px 2.27px 5.68px;
         border:1px solid white;
         color: #FFF;
         font-family: 'Imprima', sans-serif;
         font-size: 14.531px;
         font-style: normal;
         font-weight: 400;
         line-height: normal;
        `
        case 'desc':return`
        color: #FFF;
        font-family: 'Imprima', sans-serif;
        font-size: 19.981px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        `
        case 'time':return`
        color: #FFF;
        font-family: 'Imprima', sans-serif;
        font-size: 17.256px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display:flex;
        justify-content:center;
        alig-items:center;
        gap:0.4vw;
        `
        case 'share':return`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        color: #FFF;
        font-family: 'Imprima', sans-serif;
        font-size: 13.687px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        `
        case 'rate':return`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        color: #FFF;
        font-family: 'Imprima', sans-serif;
        font-size: 29.063px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        `
        case 'button':return`
        display:flex;
        align-items:center;
        justify-content:center;
        padding:11.15px 7.44px 9.29px 10.22px;
        border-radius: 22.307px;
        border: 1.859px solid #CF0;
        background: rgba(36, 36, 36, 0.96);
        color: #FFF;
        font-family: 'Imprima', sans-serif;
        font-size: 16.348px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        cursor:pointer;
        `
        case 'about' : return`
        color: #FFF;
        font-family: 'Gurajada', sans-serif;
        font-size: 23.85px;
        font-style: normal;
        font-weight: 400;
        line-height: 74%;
        letter-spacing: 2.147px;
        `
        default:return``
    }
 }

 export const CardInnerContainerSpan = styled.span`
  ${CardInnerContainerSpanCalaa}
 `

 export const CardInnerImg = styled.img`
 width: 314.672px;
 height: 426px;
 `


const play = ({player})=>{
    switch (player) {
        case 'playOn': return`
        width: 650px;
        height: 400px;
        border-radius: 15px;
        position: absolute;
        transition: 0.6s all;
        top:25%;
        left:25%;
        bottom:0;
        right:0;
        background-color:transparent;   
        `
        case 'playOf': return`
          width: 650px;
          height: 400px;
          border-radius: 15px;
          position: absolute;
          transition: 0.6s all;
          top:-150%;
          left:25%;
          bottom:0;
          right:0;
          background-color:transparent;
         `    
        default:return`
         width: 650px;
         height: 400px;
         border-radius: 15px;
         background-color:transparent;
         position: absolute;
         transition: 0.6s all;
         top:-150%;
         left:25%;
         bottom:0;
         right:0;
        `
    }
}


export const CardInnerVideo = styled.div`
${play}
`

export const CardsBack = styled.img`
position: absolute;
top: 12%;
left: 5%;

`