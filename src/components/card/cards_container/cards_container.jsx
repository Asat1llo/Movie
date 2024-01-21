import { CardsWrraper, CardsDesc, CardsSpan, CardsContainerImg } from './cards_container.js'
import { NavLink as Link } from 'react-router-dom'
import { Img } from '../../../Container.js'

import time from './../../../assets/svg/cards/watch.svg'
import rating from './../../../assets/svg/cards/star.svg'


const CardsContainer = ({item}) => {
    return (
            <Link to={`/cardinner/${item.id}`}>
            <CardsWrraper >
                <CardsContainerImg src={item.img}/>
                <CardsDesc desc={'desc_wrraper'}>
                    <CardsDesc desc={'desc_container_1'}>
                     <CardsSpan cardsspan={'cards_name'}>{item.name.length > 10 ? item.name.slice(0,20) + '...' : item.name}</CardsSpan>
                     <CardsSpan cardsspan={'cards_year'}>{item.year}</CardsSpan>
                    </CardsDesc>
                    <CardsDesc desc={'desc_container_2'}> 
                     <CardsSpan cardsspan={'cards_hd'}>{item.quality}</CardsSpan>
                     <CardsSpan cardsspan={'cards_time'}><Img src={time}/>{item.time}</CardsSpan>
                     <CardsSpan cardsspan={'cards_rating'}><Img src={rating}/>{item.rating}</CardsSpan>
                    </CardsDesc>
                </CardsDesc>
            </CardsWrraper>
            </Link>
    )
}

export default CardsContainer
