import { Container, Section } from '../../Container.js'
import {CardWrraper} from './card.js'
import CardsHeader from './cards_header/cards_header.jsx'
import CardsContainer from './cards_container/cards_container.jsx'

function Card(){
    return(
          <Section section={'section_card'} >
            <Container>
            <CardWrraper>
                <CardsHeader/>
                <CardsContainer/>
            </CardWrraper>
            </Container>
          </Section>
    )
}

export default Card