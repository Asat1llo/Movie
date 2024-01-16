import { ContainerWrraper, CardsWrraper, CardsDesc, CardsSpan, CardsContainerImg } from './cards_container.js'
import { NavLink as Link } from 'react-router-dom'

import cards1 from '../../../assets/img/cards/cards_img.png'

const CardsContainer = () => {
    return (
        <ContainerWrraper>
            <Link to={'cardinner'}>
            <CardsWrraper>
                <CardsContainerImg src={cards1}/>
                <CardsDesc desc={'desc_wrraper'}>
                    <CardsDesc desc={'desc_container_1'}>
                     <CardsSpan cardsspan={'cards_name'}>Free Guy</CardsSpan>
                     <CardsSpan cardsspan={'cards_year'}>2023</CardsSpan>
                    </CardsDesc>
                    <CardsDesc desc={'desc_container_2'}>
                     <CardsSpan cardsspan={'cards_hd'}>HD</CardsSpan>
                     <CardsSpan cardsspan={'cards_time'}>130</CardsSpan>
                     <CardsSpan cardsspan={'cards_rating'}>7.0</CardsSpan>
                    </CardsDesc>
                </CardsDesc>
            </CardsWrraper>
            </Link>
            <CardsWrraper>
                <CardsContainerImg src={cards1}/>
                <CardsDesc desc={'desc_wrraper'}>
                    <CardsDesc desc={'desc_container_1'}>
                     <CardsSpan cardsspan={'cards_name'}>Free Guy</CardsSpan>
                     <CardsSpan cardsspan={'cards_year'}>2023</CardsSpan>
                    </CardsDesc>
                    <CardsDesc desc={'desc_container_2'}>
                     <CardsSpan cardsspan={'cards_hd'}>HD</CardsSpan>
                     <CardsSpan cardsspan={'cards_time'}>130</CardsSpan>
                     <CardsSpan cardsspan={'cards_rating'}>7.0</CardsSpan>
                    </CardsDesc>
                </CardsDesc>
            </CardsWrraper>
            <CardsWrraper>
                <CardsContainerImg src={cards1}/>
                <CardsDesc desc={'desc_wrraper'}>
                    <CardsDesc desc={'desc_container_1'}>
                     <CardsSpan cardsspan={'cards_name'}>Free Guy</CardsSpan>
                     <CardsSpan cardsspan={'cards_year'}>2023</CardsSpan>
                    </CardsDesc>
                    <CardsDesc desc={'desc_container_2'}>
                     <CardsSpan cardsspan={'cards_hd'}>HD</CardsSpan>
                     <CardsSpan cardsspan={'cards_time'}>130</CardsSpan>
                     <CardsSpan cardsspan={'cards_rating'}>7.0</CardsSpan>
                    </CardsDesc>
                </CardsDesc>
            </CardsWrraper>
            <CardsWrraper>
                <CardsContainerImg src={cards1}/>
                <CardsDesc desc={'desc_wrraper'}>
                    <CardsDesc desc={'desc_container_1'}>
                     <CardsSpan cardsspan={'cards_name'}>Free Guy</CardsSpan>
                     <CardsSpan cardsspan={'cards_year'}>2023</CardsSpan>
                    </CardsDesc>
                    <CardsDesc desc={'desc_container_2'}>
                     <CardsSpan cardsspan={'cards_hd'}>HD</CardsSpan>
                     <CardsSpan cardsspan={'cards_time'}>130</CardsSpan>
                     <CardsSpan cardsspan={'cards_rating'}>7.0</CardsSpan>
                    </CardsDesc>
                </CardsDesc>
            </CardsWrraper>
            <CardsWrraper>
                <CardsContainerImg src={cards1}/>
                <CardsDesc desc={'desc_wrraper'}>
                    <CardsDesc desc={'desc_container_1'}>
                     <CardsSpan cardsspan={'cards_name'}>Free Guy</CardsSpan>
                     <CardsSpan cardsspan={'cards_year'}>2023</CardsSpan>
                    </CardsDesc>
                    <CardsDesc desc={'desc_container_2'}>
                     <CardsSpan cardsspan={'cards_hd'}>HD</CardsSpan>
                     <CardsSpan cardsspan={'cards_time'}>130</CardsSpan>
                     <CardsSpan cardsspan={'cards_rating'}>7.0</CardsSpan>
                    </CardsDesc>
                </CardsDesc>
            </CardsWrraper>
            <CardsWrraper>
                <CardsContainerImg src={cards1}/>
                <CardsDesc desc={'desc_wrraper'}>
                    <CardsDesc desc={'desc_container_1'}>
                     <CardsSpan cardsspan={'cards_name'}>Free Guy</CardsSpan>
                     <CardsSpan cardsspan={'cards_year'}>2023</CardsSpan>
                    </CardsDesc>
                    <CardsDesc desc={'desc_container_2'}>
                     <CardsSpan cardsspan={'cards_hd'}>HD</CardsSpan>
                     <CardsSpan cardsspan={'cards_time'}>130</CardsSpan>
                     <CardsSpan cardsspan={'cards_rating'}>7.0</CardsSpan>
                    </CardsDesc>
                </CardsDesc>
            </CardsWrraper>
            <CardsWrraper>
                <CardsContainerImg src={cards1}/>
                <CardsDesc desc={'desc_wrraper'}>
                    <CardsDesc desc={'desc_container_1'}>
                     <CardsSpan cardsspan={'cards_name'}>Free Guy</CardsSpan>
                     <CardsSpan cardsspan={'cards_year'}>2023</CardsSpan>
                    </CardsDesc>
                    <CardsDesc desc={'desc_container_2'}>
                     <CardsSpan cardsspan={'cards_hd'}>HD</CardsSpan>
                     <CardsSpan cardsspan={'cards_time'}>130</CardsSpan>
                     <CardsSpan cardsspan={'cards_rating'}>7.0</CardsSpan>
                    </CardsDesc>
                </CardsDesc>
            </CardsWrraper>
                <CardsWrraper>
                    <CardsContainerImg src={cards1}/>
                    <CardsDesc desc={'desc_wrraper'}>
                        <CardsDesc desc={'desc_container_1'}>
                        <CardsSpan cardsspan={'cards_name'}>Free Guy</CardsSpan>
                        <CardsSpan cardsspan={'cards_year'}>2023</CardsSpan>
                        </CardsDesc>
                        <CardsDesc desc={'desc_container_2'}>
                        <CardsSpan cardsspan={'cards_hd'}>HD</CardsSpan>
                        <CardsSpan cardsspan={'cards_time'}>130</CardsSpan>
                        <CardsSpan cardsspan={'cards_rating'}>7.0</CardsSpan>
                        </CardsDesc>
                    </CardsDesc>
                </CardsWrraper>
        </ContainerWrraper>
    )
}

export default CardsContainer
