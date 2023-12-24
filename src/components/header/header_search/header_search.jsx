import { SearchWrraper, SearchRol, SearchStick } from './header_search.js'
import { useState, useRef } from 'react'


const HeaderSearch = () => {
    const elSearch = useRef()
    const [active, setActive] = useState()
    const [active2, setActive2] = useState('stick1')

    return (
        <SearchWrraper>
            <SearchRol active={active} onClick={() => {
                setActive2('stick2')
                setActive('class1')
            }}/>
            <SearchStick stick={active2} onClick={() => {
                setActive('class2')
                setActive2('stick1')
        }} />
        </SearchWrraper>
    )
}

export default HeaderSearch