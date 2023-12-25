import { SearchWrraper, SearchRol,SearchImg } from './header_search.js'
import { useState, useRef } from 'react'

import search from '../../../assets/svg/header/search.svg' 

const HeaderSearch = () => {

    const [active, setActive] = useState()
    const [active2, setActive2] = useState()

    return (
        <SearchWrraper>
            <SearchRol active={active} onClick={() => {
                setActive2('search2')
                setActive('class1')
            }}/>
             <SearchImg src={search} active2={active2} onClick={()=>{
                setActive('class2')
                setActive2('search1')
                }}/>
        </SearchWrraper>
    )
}

export default HeaderSearch