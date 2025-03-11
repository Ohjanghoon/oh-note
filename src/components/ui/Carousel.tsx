"use client";

import { useEffect, useState, ReactNode } from "react";

// icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselProps {
  children: ReactNode[];
  intervalTime?: number; // 자동 슬라이드 시간 설정 (기본값 5000ms)
}

function Carousel({ children, intervalTime = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = children.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (currentIndex === totalSlides) {
      setCurrentIndex(0);
    }

    const interval = setInterval(nextSlide, intervalTime);
    return () => clearInterval(interval);
  }, [currentIndex, intervalTime]);

  return (
    <div className="group relative w-full overflow-hidden pb-8">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* 좌우 버튼 */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-gray-800/50 p-2 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-gray-800/50 p-2 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        <IoIosArrowForward />
      </button>

      {/* 인디케이터 (점) */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {children.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              currentIndex === index ? "bg-primary" : "bg-muted"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
