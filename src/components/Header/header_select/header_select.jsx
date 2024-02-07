import {Select,SelectContainer,SelectOptions1,SelectImg} from './header_select.js'

import select from '../../../assets/svg/header/world.svg'

const HeaderSelect = ()=>{
    return(
        <Select>    
            <SelectImg src={select}/>
            <SelectContainer>
                <SelectOptions1 value={'en'}>EN</SelectOptions1>
                <SelectOptions1 value={'ru'}>RU</SelectOptions1>
            </SelectContainer>
        </Select>
    )
}

export default HeaderSelect 