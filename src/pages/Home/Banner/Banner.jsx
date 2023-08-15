// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
            spaceBetween={30}
          centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <img src="https://i.ibb.co/Gdb1RZ0/1-1.jpg" alt="" />
              <div className="absolute top-12  left-0 lg:top-32 lg:left-5 lg:right-0 lg:w-1/2 ps-6">
                <h1 className="text-start text-base font-semibold text-yellow-500 uppercase">
                  Chair <br className="hidden lg:block" /> Collection{" "}
                  <br className="hidden lg:block" /> 2023
                </h1>
                <h2 className="text-start  lg:text-6xl ">
                  Welcome to <br className="hidden lg:block" /> Helendo Story
                </h2>

                <p className="text-start text-sm lg:text-base mt-2 hidden lg:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  ut earum fugit optio. Tempore esse suscipit rerum dolores
                  fugiat harum!
                </p>
                <p className="primary-btn-sm lg:primary-btn mt-3 lg:mt-6">
                  Shop Now
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src="https://i.ibb.co/TrD8CnY/2-1.jpg" alt="" />
              <div className="absolute top-12  left-0 lg:top-32 lg:left-5 lg:right-0 lg:w-1/2 ps-6">
                <h1 className="text-start text-base font-semibold text-yellow-500 uppercase">
                  Chair <br className="hidden lg:block" /> Collection{" "}
                  <br className="hidden lg:block" /> 2023
                </h1>
                <h2 className="text-start  lg:text-6xl ">
                  Welcome to <br className="hidden lg:block" /> Helendo Story
                </h2>

                <p className="text-start text-sm lg:text-base mt-2 hidden lg:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  ut earum fugit optio. Tempore esse suscipit rerum dolores
                  fugiat harum!
                </p>
                <p className="primary-btn-sm lg:primary-btn mt-3 lg:mt-6">
                  Shop Now
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src="https://i.ibb.co/bgFfWzk/3-1.jpg" alt="" />
              <div className="absolute top-12  left-0 lg:top-32 lg:left-5 lg:right-0 lg:w-1/2 ps-6">
                <h1 className="text-start text-base font-semibold text-yellow-500 uppercase">
                  Chair <br className="hidden lg:block" /> Collection{" "}
                  <br className="hidden lg:block" /> 2023
                </h1>
                <h2 className="text-start  lg:text-6xl ">
                  Welcome to <br className="hidden lg:block" /> Helendo Story
                </h2>

                <p className="text-start text-sm lg:text-base mt-2 hidden lg:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  ut earum fugit optio. Tempore esse suscipit rerum dolores
                  fugiat harum!
                </p>
                <p className="primary-btn-sm lg:primary-btn mt-3 lg:mt-6">
                  Shop Now
                </p>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </>
    </div>
  );
};

export default Banner;
