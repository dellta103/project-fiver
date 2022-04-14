import React from "react";
import "./Carousel2Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
export default function Carousel2Home() {
  SwiperCore.use([Autoplay, EffectFade, Navigation]);

  return (
    <div className="p-20">
      <div className="w-9/12 m-auto carousel2">
        <span className="text-4xl font-bold">
          Popular professional services
        </span>
        <Swiper
          navigation={true}
          className="mySwiper mt-5"
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            720: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide className="slide">
            <img src="./img/1.jpg" alt="" />
            <div className="text">
              <span className="text-white text-md font-semibold">
                Build your brand
              </span>
              <p className="text-white text-2xl font-bold">Logo Design</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            {" "}
            <img src="./img/2.jpg" alt="" />
            <div className="text">
              <span className="text-white text-md font-semibold">
                Customize your site
              </span>
              <p className="text-white text-2xl font-bold">WordPress</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            {" "}
            <img src="./img/3.jpg" alt="" />
            <div className="text">
              <span className="text-white text-md font-semibold">
                Share your message
              </span>
              <p className="text-white text-2xl font-bold">Voice Over</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            {" "}
            <img src="./img/4.jpg" alt="" />
            <div className="text">
              <span className="text-white text-md font-semibold">
                Engage your audience
              </span>
              <p className="text-white text-2xl font-bold">Video Explainer</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            {" "}
            <img src="./img/5.jpg" alt="" />
            <div className="text">
              <span className="text-white text-md font-semibold">
                Reach more customers
              </span>
              <p className="text-white text-2xl font-bold">Social Media</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            {" "}
            <img src="./img/6.jpg" alt="" />
            <div className="text">
              <span className="text-white text-md font-semibold">
                Unlock growth online
              </span>
              <p className="text-white text-2xl font-bold">SEO</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            {" "}
            <img src="./img/7.jpg" alt="" />
            <div className="text">
              <span className="text-white text-md font-semibold">
                Color your dreams
              </span>
              <p className="text-white text-2xl font-bold">Illustration</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            {" "}
            <img src="./img/8.jpg" alt="" />
            <div className="text">
              <span className="text-white text-md font-semibold">
                Go global
              </span>
              <p className="text-white text-2xl font-bold">Translation</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            {" "}
            <img src="./img/9.jpg" alt="" />
            <div className="text">
              <span className="text-white text-md font-semibold">
                Learn your business
              </span>
              <p className="text-white text-2xl font-bold">Data Entry</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            {" "}
            <img src="./img/10.jpg" alt="" />
            <div className="text">
              <span className="text-white text-md font-semibold">
                Showcase your story
              </span>
              <p className="text-white text-2xl font-bold">Book Covers</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
