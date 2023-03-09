"use client";

import { Button } from "./Button";
import { Carousel } from "./Carousel";
import { Header } from "./Header";

export const Hero = () => {
  return (
    <>
      <Header />
      <section className="bg-black">
        <Carousel
          renderItem={(data) => (
            <section className="flex justify-center h-[calc(100vh-98px)] items-center">
              <div className="lg:w-[58%]">
                <div className="flex flex-col gap-6 lg:max-w-[398px]">
                  <h4 className="text-sm text-white opacity-50 font-monrope uppercase font-normal tracking-[10px]">
                    NEW PRODUCT
                  </h4>
                  <h2 className="text-white text-[56px] tracking-[2px] leading-[58px] font-monrope font-bold uppercase">
                    {data.name}
                  </h2>
                  <p className="text-[15px] leading-[25px] font-medium font-monrope opacity-[0.75] text-white">
                    {data.description}
                  </p>

                  <Button variant="contained">SEE PRODUCT</Button>
                </div>
              </div>
            </section>
          )}
          options={{
            slidesPerView: 1,
            height: 900,
            autoplay: true,
          }}
          data={[
            {
              id: "item",
              image: null,
              name: "XX99 MARK II HEADPHONES",
              description:
                "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
            },
            {
              id: "item",
              image: null,
              name: "XX99 MARK II HEADPHONES",
              description:
                "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
            },
            {
              id: "item",
              image: null,
              name: "XX99 MARK II HEADPHONES",
              description:
                "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
            },
          ]}
        />
      </section>
    </>
  );
};
