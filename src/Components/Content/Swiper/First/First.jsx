import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image from './img/pic-1.jpg'
import sec from './img/pic-3.png'
import third from './img/pic-3.png'
import fourth from './img/pic-4.png'
import fifth from './img/pic-4.png'
import sixth from './img/pic-3.png'
// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/thumbs";
import './first.scss'

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function App() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='block'>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sec} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={third} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fourth} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fifth} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fifth} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={third} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={third} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sec} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={third} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fourth} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fifth} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fifth} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={third} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={third} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
