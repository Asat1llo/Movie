import { Section } from '../../Container.js'
import MainSwiper from '../../components/main/main_swiper/main_swiper.jsx'
import { Login } from './login.jsx'

const MainLogin = ()=>{
    return(
     <Section>
        <MainSwiper/>
        <Login/>
     </Section>
    )
}

export {MainLogin}