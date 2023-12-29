import { CardsHeaderWrraper, CardsHeaderContainer, CardsHeaderLorem } from './cards_headder.js'

const CardsHeader = () => {
  return (
    <CardsHeaderWrraper>
      <CardsHeaderContainer header={'header1'}>
        <CardsHeaderLorem lorem={'lorem1'}>ONLINE STREAMING</CardsHeaderLorem>
        <CardsHeaderLorem lorem={'title'}>Upcoming Movies</CardsHeaderLorem>
      </CardsHeaderContainer>
      <CardsHeaderContainer header={'header2'}>
        <CardsHeaderLorem lorem={'lorem2'}>Movies</CardsHeaderLorem>
        <CardsHeaderLorem lorem={'lorem2'}>TVs Shows</CardsHeaderLorem>
        <CardsHeaderLorem lorem={'lorem2'}>Anime</CardsHeaderLorem>
      </CardsHeaderContainer>
    </CardsHeaderWrraper>
  )
}

export default CardsHeader
