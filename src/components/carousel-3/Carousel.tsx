// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

import "swiper/css";

import image1 from "./image-1.jpg";
import image2 from "./image-2.jpg";
import image3 from "./image-3.jpg";
import image4 from "./image-4.jpg";
import image5 from "./image-5.jpg";
import image6 from "./image-6.jpg";
import image7 from "./image-7.jpg";

const slides = [image1, image2, image3, image4, image6, image7];

export const Carousel = () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={3} loop>
      {slides.map((slide) => (
        <SwiperSlide>
          <img src={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
