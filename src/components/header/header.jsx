import { Section, HeaderWrraper, Logo, HeaderList, HeaderLink, HeaderContainer } from './header.js'
import { Container } from '../../Container.js'
import HeaderSearch from './header_search/header_search.jsx'

import headerlogo from "../../assets/svg/header/logo.svg"

function Header() {
    return (
        <Section>
            <Container>
                <HeaderWrraper>
                    <Logo src={headerlogo} />
                    <HeaderList>
                        <HeaderLink>HOME</HeaderLink>
                        <HeaderLink>MOVIE</HeaderLink>
                        <HeaderLink>TV SHOW</HeaderLink>
                        <HeaderLink>WEB SERIES</HeaderLink>
                        <HeaderLink>PRIMIUM</HeaderLink>
                    </HeaderList>
                    <HeaderContainer>
                        <HeaderSearch />
                    </HeaderContainer>
                </HeaderWrraper>
            </Container>
        </Section>
    )
}

export default Header