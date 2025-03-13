"use client";

import { ReactNode } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselProps {
  children: ReactNode[];
  intervalTime?: number; // 자동 슬라이드 시간 설정 (기본값 5000ms)
}

function Carousel({ children }: CarouselProps) {
  return (
    <div className="relative">
      <button className="custom-prev absolute top-1/2 -left-10 z-1 hidden -translate-y-[45px] text-4xl md:inline">
        <IoIosArrowBack />
      </button>
      <button className="custom-next absolute top-1/2 -right-10 z-1 hidden -translate-y-[45px] text-4xl md:inline">
        <IoIosArrowForward />
      </button>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }} // 자동 재생
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{ clickable: true }} // 페이지네이션 (인디케이터)
        loop // 무한 루프
        className="w-full"
      >
        {children.map((card, index) => (
          <SwiperSlide key={index}>{card}</SwiperSlide>
        ))}
      </Swiper>
      {/* 커스텀 화살표 버튼 */}
    </div>
  );
}

export default Carousel;
