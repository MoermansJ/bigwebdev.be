import "./HomeSlider.css";
import { HomeSliderData } from "./HomeSliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/scss/effect-fade";
SwiperCore.use([EffectFade]);

function HomeSlider() {
  // React won't allow infinite loops, so perpetually resetting through our array index positions is impossible.
  // However going through them lineary does work. Perhaps this works?:
  // array[i], i++ every 5 seconds (with setInterval); if((i % array.length)=== 0){j++}; i = i - (array.length * j);

  return (
    <div className="homeSlider">
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        noSwipingClass={"homeSlider"}
        effect={"fade"}
        fadeEffect={{
          crossFade: true, // enables slides to cross fade
        }}
      >
        {HomeSliderData.map((item, key = 0) => (
          <SwiperSlide key={key}>
            <div className="homeSlider__slide">{item.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeSlider;
