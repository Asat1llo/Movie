import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useState,useEffect } from 'react'
import {Container,Img} from '../../../Container.js'
import { CardInnerWrraper, CardInnerContainer, CardInnerContainerSpan,CardInnerImg,CSection,CardInnerVideo } from './card_inner.js'

import time from './../../../assets/svg/cards/watch.svg'
import calendar from './../../../assets/svg/main/calender.svg'
import share from './../../../assets/svg/inner-card/share.svg'
import start from './../../../assets/svg/inner-card/start.svg'
import play from './../../../assets/svg/inner-card/play-small.svg'

const CardInner = ()=>{

    const {cardId} = useParams()
    const[data, setData]= useState([])
    const[playvideo, setPlayVideo]= useState('playOf')

  useEffect(()=>{
    fetch(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie/${cardId}`)
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[])


    return(
        <CSection bg={data.img}>
            <Container>
                <CardInnerWrraper>
                    <CardInnerContainer container={'container1'}>
                        <CardInnerImg src={data.img}/>
                    </CardInnerContainer>
                    <CardInnerContainer container={'container2'}>
                        <CardInnerContainerSpan span={'episod'}>{data.action}</CardInnerContainerSpan>
                        <CardInnerContainerSpan span={'name'}>{data.name}</CardInnerContainerSpan>
                        <CardInnerContainer container={'container3'}>
                            <CardInnerContainerSpan span={'movie'}>Movie</CardInnerContainerSpan>
                            <CardInnerContainerSpan span={'hd'}>{data.quality}</CardInnerContainerSpan>
                            <CardInnerContainerSpan span={'desc'}>Action, Drama, Adventure, Science fiction</CardInnerContainerSpan>
                            <CardInnerContainerSpan span={'time'}><Img src={time}/>{data.time}min</CardInnerContainerSpan>
                            <CardInnerContainerSpan span={'time'}><Img src={calendar}/>{data.year}</CardInnerContainerSpan>
                        </CardInnerContainer>
                        <CardInnerContainer container={'container4'}>
                            <CardInnerContainerSpan span={'share'}><Img src={share}/>Share</CardInnerContainerSpan>
                            <CardInnerContainerSpan span={'rate'}><Img src={start}/>{data.rating}</CardInnerContainerSpan>
                            <CardInnerContainerSpan span={'button'} onClick={()=>{setPlayVideo('playOn')}}><Img src={play}/>PLAY NOW</CardInnerContainerSpan>
                        </CardInnerContainer>
                        <CardInnerContainerSpan span={'about'}>Ryan Reynolds as Guy / Blue Shirt Guy, a bank teller and non-player character (NPC) in Free City who is initially unaware that he is a video game character.</CardInnerContainerSpan>
                    </CardInnerContainer>
                    <CardInnerVideo player={playvideo}>
                    <ReactPlayer url={data.url} controls={true}/>
                    </CardInnerVideo>
                </CardInnerWrraper>
            </Container>
        </CSection>
    )
}

export default CardInner