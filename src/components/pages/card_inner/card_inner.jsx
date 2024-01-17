import {Container, Section, Img} from '../../../Container.js'
import { CardInnerWrraper, CardInnerContainer, CardInnerContainerSpan } from './card_inner.js'

import time from './../../../assets/svg/cards/watch.svg'
import calendar from './../../../assets/svg/main/calender.svg'
import share from './../../../assets/svg/inner-card/share.svg'
import start from './../../../assets/svg/inner-card/start.svg'
import play from './../../../assets/svg/inner-card/play-small.svg'

const CardInner = ()=>{
    return(
        <Section section={'CardInner'}>
            <Container>
                <CardInnerWrraper>
                    <CardInnerContainer container={'container1'}>
                        <Img src={free}/>
                    </CardInnerContainer>
                    <CardInnerContainer container={'container2'}>
                        <CardInnerContainerSpan span={'episod'}>NEW EPISODES</CardInnerContainerSpan>
                        <CardInnerContainerSpan span={'name'}>Free <CardInnerContainerSpan span={'name2'}>Guy,</CardInnerContainerSpan></CardInnerContainerSpan>
                        <CardInnerContainer container={'container3'}>
                            <CardInnerContainerSpan span={'movie'}>Movie</CardInnerContainerSpan>
                            <CardInnerContainerSpan span={'hd'}>HD</CardInnerContainerSpan>
                            <CardInnerContainerSpan span={'desc'}>Action, Drama, Adventure, Science fiction</CardInnerContainerSpan>
                            <CardInnerContainerSpan span={'time'}><Img src={time}/>130 min</CardInnerContainerSpan>
                            <CardInnerContainerSpan span={'time'}><Img src={calendar}/>2023</CardInnerContainerSpan>
                        </CardInnerContainer>
                        <CardInnerContainer container={'container4'}>
                            <CardInnerContainerSpan span={'share'}><Img src={share}/>Share</CardInnerContainerSpan>
                            <CardInnerContainerSpan span={'rate'}><Img src={start}/>7.0</CardInnerContainerSpan>
                            <CardInnerContainerSpan span={'button'}><Img src={play}/>PLAY NOW</CardInnerContainerSpan>
                        </CardInnerContainer>
                        <CardInnerContainerSpan span={'about'}>Ryan Reynolds as Guy / Blue Shirt Guy, a bank teller and non-player character (NPC) in Free City who is initially unaware that he is a video game character.</CardInnerContainerSpan>
                    </CardInnerContainer>
                </CardInnerWrraper>
            </Container>
        </Section>
    )
}

export default CardInner