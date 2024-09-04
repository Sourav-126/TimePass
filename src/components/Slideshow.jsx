/* eslint-disable no-unused-vars */
// src/Slideshow.js
// src/components/Slideshow.js
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000, // 4 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSlideIndex(next),
    customPaging: (i) => (
      <div className="w-10 h-1 bg-gray-300 relative">
        <div
          className={`absolute top-0 left-0 h-full bg-red-500 transition-all duration-[4000ms] ${
            slideIndex === i ? "w-full" : "w-0"
          }`}
        ></div>
      </div>
    ),
    appendDots: (dots) => (
      <div className="mt-6">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-screen mx-auto py-0">
      <Slider {...settings}>
        <div className="relative">
          <img
            className="w-full h-[600px] object-cover blur-none"
            src={image1}
            alt="Image 1"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
            <h2 className="text-white text-4xl font-bold mb-4">Cappadocia</h2>
            <p className="text-white text-center mb-6 max-w-2xl">
              Offers an outstanding landscape, natural beauties, fairy chimneys
              and rock-cut houses, the picturesque valleys, scenic lunar hills,
              incredible monuments, and many more.
            </p>
            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
              Explore More
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[600px] object-cover blur-none"
            src={image2}
            alt="Image 2"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
            <h2 className="text-white text-4xl font-bold mb-4">
              Image 2 Description
            </h2>
            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
              Explore More
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[600px] object-cover blur-none"
            src={image3}
            alt="Image 3"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
            <h2 className="text-white text-4xl font-bold mb-4">
              The Taj Mahal
            </h2>
            <p className="text-white text-center mb-6 max-w-2xl">
              The Taj Mahal, a UNESCO World Heritage Site, attracts millions of
              visitors each year with its stunning white marble architecture and
              intricate inlay work. It is renowned for its breathtaking beauty
              and is considered one of the most iconic landmarks in the world.
            </p>
            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
              Explore More
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[600px] object-cover blur-none"
            src={image4}
            alt="Image 4"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
            <h2 className="text-white text-4xl font-bold mb-4"></h2>

            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
              Explore More
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[600px] object-cover blur-none"
            src={image5}
            alt="Image 5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
            <h2 className="text-white text-4xl font-bold mb-4">
              Meenakshi Temple
            </h2>
            <p className="text-white text-center mb-6 max-w-2xl">
              {" "}
              Meenakshi Temple in Madurai is renowned for its stunning Dravidian
              architecture and intricately carved gopurams (gateway towers). As
              a major pilgrimage site, it attracts thousands of visitors
              annually who come to admire its historical significance and
              vibrant religious festivals.
            </p>
            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
              Explore More
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[600px] object-cover blur-none"
            src={image6}
            alt="Image 6"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
            <h2 className="text-white text-4xl font-bold mb-4">
              Image 6 Description
            </h2>
            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
              Explore More
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[600px] object-cover blur-none"
            src={image7}
            alt="Image 7"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
            <h2 className="text-white text-4xl font-bold mb-4">India Gate</h2>
            <p className="text-white text-center mb-6 max-w-xl">
              India Gate is a 138-foot (42-meter) war memorial in the heart of
              New Delhi, reminiscent of Paris’ Arc de Triomphe. Built in 1931
              and designed by British architect Sir Edwin Lutyens, it’s a
              must-visit photo stop on a Delhi tour.
            </p>
            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
              Explore More
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[600px] object-cover blur-none"
            src={image8}
            alt="Image 8"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
            <h2 className="text-white text-4xl font-bold mb-4">
              Image 8 Description
            </h2>
            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
              Explore More
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
