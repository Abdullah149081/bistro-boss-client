/* eslint-disable import/no-unresolved */
import React from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="boss-container">
      <div className="text-center my-10">
        <h2 className="text-[#D99904] font-semibold text-2xl  italic">---From 11:00am to 10:00pm---</h2>
        <h2 className="lg:w-1/2 mx-auto text-4xl font-bold  border-y-4 border-[#E8E8E8] mt-6 py-6">ORDER ONLINE</h2>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="relative" src={slide1} alt="" />
          <h3 className="absolute bottom-5 md:bottom-10 inset-x-0 text-xs md:text-3xl text-center text-white uppercase">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="absolute bottom-5 md:bottom-10 inset-x-0 text-xs md:text-3xl text-center text-white uppercase">pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="absolute bottom-5 md:bottom-10 inset-x-0 text-xs md:text-3xl text-center text-white uppercase">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="absolute bottom-5 md:bottom-10 inset-x-0 text-xs md:text-3xl text-center text-white uppercase">desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="absolute bottom-5 md:bottom-10 inset-x-0 text-xs md:text-3xl text-center text-white uppercase">Salads</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
