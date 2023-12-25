import './main.css'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {SwiperImg} from '../main.js'

import main1 from '../../../assets/img/main/swiper1.jpg'
import main2 from '../../../assets/img/main/swiper2.jpg'
import main3 from '../../../assets/img/main/swiper3.jpg'
import main4 from '../../../assets/img/main/swiper4.jpg'
import main5 from '../../../assets/img/main/swiper5.jpg'


const MainSwiper = () => {
    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide><SwiperImg src={main1} /></SwiperSlide>
            <SwiperSlide><SwiperImg src={main2} /></SwiperSlide>
            <SwiperSlide><SwiperImg src={main3} /></SwiperSlide>
            <SwiperSlide><SwiperImg src={main4} /></SwiperSlide>
            <SwiperSlide><SwiperImg src={main5} /></SwiperSlide>
        </Swiper>
    )
}


export default MainSwiper