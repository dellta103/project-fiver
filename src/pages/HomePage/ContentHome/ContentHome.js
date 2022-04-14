import React, { useState } from "react";
import { Modal, Button } from "antd";
import ReactPlayer from "react-player";
import "antd/dist/antd.css";
import "./ContentHome.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import logo1 from "../../../logos/graphics-design.d32a2f8.svg";
import logo2 from "../../../logos/online-marketing.74e221b.svg";
import logo3 from "../../../logos/writing-translation.32ebe2e.svg";
import logo4 from "../../../logos/video-animation.f0d9d71.svg";
import logo5 from "../../../logos/music-audio.320af20.svg";
import logo6 from "../../../logos/programming.9362366.svg";
import logo7 from "../../../logos/business.bbdf319.svg";
import logo8 from "../../../logos/lifestyle.745b575.svg";
import logo9 from "../../../logos/data.718910f.svg";
import "swiper/swiper-bundle.min.css";
// swiper core styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

export default function ContentHome() {
  SwiperCore.use([Autoplay, EffectFade, Navigation]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <div className="p-20 top">
        <div className="w-9/12 m-auto flex top">
          <div className="left">
            <span className="text-4xl font-semibold">
              A whole world of freelance talent at your fingertips
            </span>
            <ul className="mt-4">
              <li>
                <span className="text-xl font-medium">
                  <i className="fa fa-check-circle"></i> The best for every
                  budget
                </span>
                <p className="text-lg font-normal text-gray-500">
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </li>
              <li>
                <span className="text-xl font-medium">
                  <i className="fa fa-check-circle"></i> Quality work done
                  quickly
                </span>
                <p className="text-lg font-normal text-gray-500">
                  Find the right freelancer to begin working on your project
                  within minutes.
                </p>
              </li>
              <li>
                <span className="text-xl font-medium">
                  <i className="fa fa-check-circle"></i> Protected payments,
                  every time
                </span>
                <p className="text-lg font-normal text-gray-500">
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
              </li>
              <li>
                <span className="text-xl font-medium">
                  <i className="fa fa-check-circle"></i> 24/7 support
                </span>
                <p className="text-lg font-normal text-gray-500">
                  Questions? Our round-the-clock support team is available to
                  help anytime, anywhere.
                </p>
              </li>
            </ul>
          </div>
          <div className="right mt-5">
            <img src="./img/vidthumb.png" alt="" onClick={showModal} />
            <i className="fa fa-play" onClick={showModal}></i>
            <Modal
              title="Intro"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              width={"680px"}
            >
              <ReactPlayer
                controls
                url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
              />
            </Modal>
          </div>
        </div>
      </div>
      <div className="bg-white py-20 w-full bottom">
        <div className=" w-9/12  m-auto ">
          <Swiper
            navigation
            loop
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => {}}
            onSwiper={(swiper) => {}}
          >
            <SwiperSlide>
              <div className="item flex">
                <div className="left">
                  <img src="./img/t1.jpg" alt="" onClick={showModal} />
                  <i className="fa fa-play" onClick={showModal}></i>
                  <Modal
                    title="Intro"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={"680px"}
                  >
                    <ReactPlayer
                      controls
                      url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
                    />
                  </Modal>
                </div>
                <div className="right">
                  <span className="text-gray-400 font-medium text-lg">
                    Kay Kim, Co-founder |{" "}
                    <span className="text-black font-bold">rooted</span>
                  </span>
                  <p className="mt-3 text-2xl text-green-800 font-semibold italic">
                    "It's extremely exciting that Fiverr has freelancers from
                    all over the world — it broadens the talent pool. One of the
                    best things about Fiverr is that while we're sleeping,
                    someone's working."
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item flex">
                <div className="left">
                  <img src="./img/t2.jpg" alt="" onClick={showModal} />
                  <i className="fa fa-play" onClick={showModal}></i>
                  <Modal
                    title="Intro"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={"680px"}
                  >
                    <ReactPlayer
                      controls
                      url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
                    />
                  </Modal>
                </div>
                <div className="right">
                  <span className="text-gray-400 font-medium text-lg">
                    Caitlin Tormey, Chief Commercial Officer |{" "}
                    <span className="text-black font-bold">NAADAM</span>
                  </span>
                  <p className="mt-3 text-2xl text-green-800 font-semibold italic">
                    "We've used Fiverr for Shopify web development, graphic
                    design, and backend web development. Working with Fiverr
                    makes my job a little easier every day."
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item flex">
                <div className="left">
                  <img src="./img/t4.jpg" alt="" onClick={showModal} />
                  <i className="fa fa-play" onClick={showModal}></i>
                  <Modal
                    title="Intro"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={"680px"}
                  >
                    <ReactPlayer
                      controls
                      url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
                    />
                  </Modal>
                </div>
                <div className="right">
                  <span className="text-gray-400 font-medium text-lg">
                    Brighid Gannon (DNP, PMHNP-BC), Co-Founder |{" "}
                    <span className="text-black font-bold">Lavender</span>
                  </span>
                  <p className="mt-3 text-2xl text-green-800 font-semibold italic">
                    "We used Fiverr for SEO, our logo, website, copy, animated
                    videos — literally everything. It was like working with a
                    human right next to you versus being across the world."
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item flex">
                <div className="left">
                  <img src="./img/t3.jpg" alt="" onClick={showModal} />
                  <i className="fa fa-play" onClick={showModal}></i>
                  <Modal
                    title="Intro"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={"680px"}
                  >
                    <ReactPlayer
                      controls
                      url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
                    />
                  </Modal>
                </div>
                <div className="right">
                  <span className="text-gray-400 font-medium text-lg">
                    Tim and Dan Joo, Co-Founders |{" "}
                    <span className="text-black font-bold">HAERFEST</span>
                  </span>
                  <p className="mt-3 text-2xl text-green-800 font-semibold italic">
                    "When you want to create a business bigger than yourself,
                    you need a lot of help. That's what Fiverr does."
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="explore">
        <div className="w-9/12 m-auto">
          <span className="text-3xl font-bold">Explore the marketplace</span>
          <div className="mt-10 content  lg:grid-cols-5 grid gap-5 md:grid-cols-3 xs:grid-cols-2">
            <div className="explore-item flex flex-col items-center justify-center">
              <div className="explore-top">
                <img
                  src={logo1}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div className="explore-bottom mt-3">
                <span className="text-md font-semibold">Graphic & Design</span>
              </div>
            </div>
            <div className="explore-item flex flex-col items-center justify-center">
              <div className="explore-top">
                <img
                  src={logo2}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div className="explore-bottom mt-3">
                <span className="text-md font-semibold">Digital Marketing</span>
              </div>
            </div>
            <div className="explore-item flex flex-col items-center justify-center">
              <div className="explore-top">
                <img
                  src={logo3}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div className="explore-bottom mt-3">
                <span className="text-md font-semibold">
                  Writing & Translation
                </span>
              </div>
            </div>
            <div className="explore-item flex flex-col items-center justify-center">
              <div className="explore-top">
                <img
                  src={logo4}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div className="explore-bottom mt-3">
                <span className="text-md font-semibold">Video & Animation</span>
              </div>
            </div>
            <div className="explore-item flex flex-col items-center justify-center">
              <div className="explore-top">
                <img
                  src={logo5}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div className="explore-bottom mt-3">
                <span className="text-md font-semibold">Music & Audio</span>
              </div>
            </div>
            <div className="explore-item flex flex-col items-center justify-center">
              <div className="explore-top">
                <img
                  src={logo6}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div className="explore-bottom mt-3">
                <span className="text-md font-semibold">
                  Programming & Tech
                </span>
              </div>
            </div>
            <div className="explore-item flex flex-col items-center justify-center">
              <div className="explore-top">
                <img
                  src={logo7}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div className="explore-bottom mt-3">
                <span className="text-md font-semibold">Business</span>
              </div>
            </div>
            <div className="explore-item flex flex-col items-center justify-center">
              <div className="explore-top">
                <img
                  src={logo8}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div className="explore-bottom mt-3">
                <span className="text-md font-semibold">Lifestyle</span>
              </div>
            </div>
            <div className="explore-item flex flex-col items-center justify-center">
              <div className="explore-top">
                <img
                  src={logo9}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div className="explore-bottom mt-3">
                <span className="text-md font-semibold">Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
