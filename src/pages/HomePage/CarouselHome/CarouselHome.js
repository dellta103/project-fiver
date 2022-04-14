import React, { useState } from "react";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper.scss";
import "./CarouselHome.scss";
import { jobService } from "../../../services/jobService";
import { useDispatch } from "react-redux";
import { filterJobs } from "../../../components/redux/slices/jobSlice";
import { useNavigate } from "react-router-dom";
export default function CarouselHome() {
  const [input, setInput] = useState("");
  const { Search } = Input;
  SwiperCore.use([Autoplay, EffectFade]);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    jobService
      .getJobListByName(input)
      .then((res) => {
        dispatch(filterJobs(res.data));
      })
      .catch((err) => {});
    navigate("/jobs");
  };
  return (
    <div>
      <div className="swiper">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
        >
          <SwiperSlide>
            <div className="bg1"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg3"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg4"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg5"></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="responsiveContent"></div>
      <div className="contentMain ">
        <p className="text-white font-medium ">
          Find the perfect <i>freelance</i> services for your business
        </p>
        <form
          className="search flex"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="search"
            placeholder='Try "building mobile app"'
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
