import { useParams, NavLink as Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useState,useEffect,useRef } from 'react'
import {Container,Img} from '../../Container.js'
import { CardInnerWrraper, CardInnerContainer, CardInnerContainerSpan,CardInnerImg,CSection,CardInnerVideo, CardsBack } from './card_inner.js'
import { Loding } from '../Loding/index.jsx'
 
import time from './../../assets/svg/cards/watch.svg'
import calendar from './../../assets/svg/main/calender.svg'
import share from './../../assets/svg/inner-card/share.svg'
import start from './../../assets/svg/inner-card/start.svg'
import play from './../../assets/svg/inner-card/play-small.svg'
import close from './../../assets/img/cards/close.png'
import back from './../../assets/img/cards/back.png'
import axios from 'axios'

export const CardInner = ()=>{
    
    const {cardId} = useParams()
    const [data, setData]= useState([])
    const [playvideo, setPlayVideo]= useState()
    const [playt , setPlayt] = useState(false)
    const [loading, setLoading]= useState(false)

    
    useEffect(()=>{
        setLoading(true)
        const getData = async ()=>{
        const res = await axios.get(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie/${cardId}`)
        setData(res.data)
         setLoading(false)
        }
        getData()
    },[])

    if(loading){
        return <Loding/>
    }

    
    else return(
        <CSection bg={data.bg}>
            <Container>
                <CardInnerWrraper>
                    <Link to={'/'}>
                      <CardsBack src={back} span={'back'}/>
                    </Link>
                    <CardInnerContainer container={'container1'}>
                        <CardInnerImg src={data.img}/>
                    </CardInnerContainer>
                    <CardInnerContainer container={'container2'}>
                        <CardInnerContainerSpan span={'episod'}>{data.action}</CardInnerContainerSpan>
                        <CardInnerContainerSpan span={'name'} >{data.name}</CardInnerContainerSpan>
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
                            <CardInnerContainerSpan span={'button'} onClick={()=>{
                                setPlayt(true)
                                setPlayVideo('playOn')
                                }}><Img src={play} onClick={()=>setPlayVideo('playOn')}/>PLAY NOW</CardInnerContainerSpan>
                        </CardInnerContainer>
                        <CardInnerContainerSpan span={'about'}>Ryan Reynolds as Guy / Blue Shirt Guy, a bank teller and non-player character (NPC) in Free City who is initially unaware that he is a video game character.</CardInnerContainerSpan>
                    </CardInnerContainer>
                    <CardInnerVideo player={playvideo}>
                        <Img img={'close'} src={close} onClick={()=>{
                            setPlayt(false)
                            setPlayVideo('playOf')
                            }}/>
                    <ReactPlayer url={data.trailer} controls={true} playing={playt} width={650} height={400}/>
                    </CardInnerVideo>
                </CardInnerWrraper>
            </Container>
        </CSection>
    )
}
