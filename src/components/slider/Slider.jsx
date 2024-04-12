import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { HOME_SLIDER } from "../../util/homeSlider";
import classes from "./Slider.module.scss";
const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {HOME_SLIDER.map((item) => {
        return (
          <SwiperSlide key={item.id} className={classes.sliderContainer}>
            <img src={item.image} alt={item.image} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
