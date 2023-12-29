import { Container, Section } from '../../Container.js'
import {CardSection,CardWrraper} from './card.js'
import CardsHeader from './cards_header/cards_header.jsx'

function Card(){
    return(
          <CardSection >
            <Container>
            <CardWrraper>
                <CardsHeader/>
            </CardWrraper>
            </Container>
          </CardSection>
    )
}

export default Card