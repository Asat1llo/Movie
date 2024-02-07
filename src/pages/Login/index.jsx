import { Section } from '../../Container.js'
import MainSwiper from '../../components/Main/main_swiper/main_swiper.jsx'
import { MainLogin } from './login.jsx'

export const Login = ()=>{
    return(
     <Section>
        <MainSwiper/>
        <MainLogin/>
     </Section>
    )
}
