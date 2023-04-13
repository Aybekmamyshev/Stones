import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./second.scss"

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function App() {
    return (
        <div className='second-swiper'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper-second"
            >
                <SwiperSlide>
                    <img src="https://bigpicture.ru/wp-content/uploads/2016/04/incrediblestones02.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://bigpicture.ru/wp-content/uploads/2016/04/incrediblestones02.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://bigpicture.ru/wp-content/uploads/2016/04/incrediblestones02.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://bigpicture.ru/wp-content/uploads/2016/04/incrediblestones02.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://bigpicture.ru/wp-content/uploads/2016/04/incrediblestones02.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://bigpicture.ru/wp-content/uploads/2016/04/incrediblestones02.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://bigpicture.ru/wp-content/uploads/2016/04/incrediblestones02.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://bigpicture.ru/wp-content/uploads/2016/04/incrediblestones02.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://bigpicture.ru/wp-content/uploads/2016/04/incrediblestones02.jpg" alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
