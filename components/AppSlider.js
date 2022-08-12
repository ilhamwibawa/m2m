import React from "react";
import AppButton from "./AppButton";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function AppSlider({ slides }) {
  const [active, setActive] = React.useState(0);

  return (
    <div className="relative">
      <div className="relative h-56 overflow-hidden md:h-96">
        {slides &&
          slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0  w-full duration-700 h-full ease-in-out ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="flex flex-col items-center justify-center p-4">
                  <h1 className="text-3xl font-bold text-center text-white mb-5">
                    {slide.title}
                  </h1>
                  <p className="text-center text-gray-200">
                    {slide.description}
                  </p>
                  <div className="mt-5">
                    <AppButton apperance="rounded" variant="primary">
                      Getting started
                    </AppButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="">
        <div className="absolute left-10 top-[45%]">
          <AppButton
            className="p-4 bg-gray-100 rounded-full"
            onClick={() => {
              if (active === 0) {
                setActive(slides.length - 1);
              } else {
                setActive(active - 1);
              }
            }}
          >
            <BsChevronLeft />
          </AppButton>
        </div>
        <div className="absolute right-10 top-[45%]">
          <AppButton
            className="p-4 bg-gray-100 rounded-full"
            onClick={() => {
              if (active === slides.length - 1) {
                setActive(0);
              } else {
                setActive(active + 1);
              }
            }}
          >
            <BsChevronRight />
          </AppButton>
        </div>
      </div>
    </div>
  );
}

export default AppSlider;
