import React from "react";
import classes from "./CasinoGameSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { CASINO_GAME_SLIDER } from "../../util/casinoGamesSlider";

const CasinoGameSliders = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Scrollbar]}
      slidesPerView={6.8}
      spaceBetween={10}
      scrollbar={{ draggable: true }}
      className={classes.casinoGameSliders}
    >
      {CASINO_GAME_SLIDER.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div className={classes.imgContainer}>
              <img src={item.image} alt="" />
            </div>
            <div className={classes.gameName}>
              <p>{item.gameName}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CasinoGameSliders;
