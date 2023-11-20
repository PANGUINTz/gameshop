import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

//import logo
import freefire from "../../assets/logos/ff.jpg";
import genshin from "../../assets/logos/genshin.jpg";
import honkai from "../../assets/logos/honkai.png";
import lol from "../../assets/logos/lol_logo.jpg";
import mbll from "../../assets/logos/mobile_legend.jpg";
import pubg from "../../assets/logos/pubg_mb.png";
import roo from "../../assets/logos/roo.jpg";
import rov from "../../assets/logos/rov.jpg";
import valorant from "../../assets/logos/valorant.png";
import dragonraja from "../../assets/logos/dragon_raja.jpg";
import dragonnest2 from "../../assets/logos/dragonnest2.png";
import harry from "../../assets/logos/harry-potter-magic-awakened.png";
import nikke from "../../assets/logos/nikke.jpg";
import ragnarokether from "../../assets/logos/ragnarok_m_eternal_love_logo.jpeg";

//import components
import CardMenu from "../CardMenu";

export default function Slides() {
  return (
    <div className="p-2 z-0">
      <Swiper
        navigation={true}
        loop={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardMenu images={freefire} name="freefire" discount="16" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMenu images={genshin} name="genshin impact" discount="11" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMenu images={honkai} name="honkai star rail" discount="18" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMenu images={lol} name="leagues of legend" discount="12" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMenu images={mbll} name="mobile legend" discount="13" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMenu images={pubg} name="pubg" discount="18" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMenu images={roo} name="Ragnarok Origin" discount="16" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMenu images={rov} name="arena of valor" discount="12" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMenu images={valorant} name="valorant" discount="16" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMenu images={dragonraja} name="dragon raja" discount="18" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMenu images={dragonnest2} name="dragonnest 2" discount="18" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMenu images={harry} name="Harry potter" discount="16" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMenu images={nikke} name="nikke" discount="10" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMenu
            images={ragnarokether}
            name="ragnarok ethernal love"
            discount="10"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
