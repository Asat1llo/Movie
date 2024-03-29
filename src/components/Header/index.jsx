import { HeaderWrraper, Logo, HeaderList, HeaderLink, HeaderContainer, HeaderBtn } from './header.js'
import { Container,Section } from '../../Container.js'
import { NavLink as Link } from 'react-router-dom'
import HeaderSearch from './header_search/header_search.jsx'
import HeaderSelect from './header_select/header_select.jsx'

import headerlogo from "../../assets/svg/header/logo.svg"

export function Header({setGiveValue}) {
    return (
        <Section section={'section_header'}>
            <Container>
                <HeaderWrraper>
                    <Link to={'/'}>
                    <Logo src={headerlogo} />
                    </Link>
                    <HeaderList>
                        <Link to={'/'}>
                        <HeaderLink>HOME</HeaderLink>
                        </Link>
                        <HeaderLink>MOVIE</HeaderLink>
                        <HeaderLink>TV SHOW</HeaderLink>
                        <HeaderLink>WEB SERIES</HeaderLink>
                        <HeaderLink>PRIMIUM</HeaderLink>
                    </HeaderList>
                    <HeaderContainer>
                        <HeaderSearch setGiveValue={setGiveValue} />
                        <HeaderSelect/>
                        <Link to={'/login'}>
                        <HeaderBtn>SIGN IN</HeaderBtn>
                        </Link>
                    </HeaderContainer>
                </HeaderWrraper>
            </Container>
        </Section>
    )
}
