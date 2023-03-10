"use client";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";

export interface CarouselProps<T> {
  options: SwiperProps;
  data: T[];
  renderItem: (prop: T) => JSX.Element;
}

export const Carousel = <T extends any>(props: CarouselProps<T>) => {
  console.log(props.data);

  return (
    <Swiper {...props.options}>
      {props.data.map((item, index) => (
        <SwiperSlide key={index}>{props.renderItem(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
};
