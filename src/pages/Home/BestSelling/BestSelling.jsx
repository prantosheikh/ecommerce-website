import  { useEffect, useState } from "react";
import { HiPlus, HiOutlineHeart, HiOutlineBriefcase } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

const BestSelling = () => {
  const [hovered, setHovered] = useState(null); // Store the ID of the hovered card
  const [cards, setCard] = useState([]);
  
  AOS.init({
    // Configure options here (e.g., duration, easing, offset, etc.)
  });

  useEffect(() => {
    fetch("http://localhost:3000/card")
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      });
  }, []);

  const toggleHover = (cardId) => {
    setHovered(cardId);
  };

  const clearHover = () => {
    setHovered(null);
  };

  return (
    <div className="py-10 mt-[80px]">
       <h1 className="text-4xl text-center my-2 font-bold relative group cursor-pointer mb-6 hover:text-yellow-600 transition duration-300 transition-delay-500 ease-in-out">
          Table Wood Pine
          <span className="absolute -bottom-3 left-[480px] w-1/4 h-0.5 bg-yellow-600 transform origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-2"></span>
        </h1>
      <div  data-aos="zoom-out-up" className="flex justify-center items-center mt-20">

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}
          pagination={{ clickable: true }}
          breakpoints={{
            "@0.75": { slidesPerView: 2 },
            "@1.00": { slidesPerView: 3 },
            "@1.50": { slidesPerView: 4 },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {cards.map((card) => (
            <SwiperSlide key={card._id}>
              <div
             
                className={`max-w-xs bg-white shadow-lg rounded-lg overflow-hidden relative transform transition-transform hover:scale-105 ${
                  hovered === card._id ? "hovered" : ""
                }`}
                onMouseEnter={() => toggleHover(card._id)}
                onMouseLeave={clearHover}
              >
                <img
                  className="w-full h-52 object-cover"
                  src={card.img}
                  alt="Card Background"
                />
                {hovered === card._id && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 justify-center transition duration-300">
                    <button  className="btn btn-sm rounded-full h-5"><HiPlus className="text-3xl hover:text-yellow-500 transition duration-300" /></button>
                    <button className="btn  btn-sm btn-circle"><HiOutlineHeart className="text-3xl hover:text-yellow-500 transition duration-300" /></button>
                   <button className="btn btn-sm rounded-full "> <HiOutlineBriefcase className="text-3xl hover:text-yellow-500 transition duration-300" /></button>
                  </div>
                )}
                <div className="p-4 text-center">
                  <p className="text-base text-gray-600 font-semibold">
                    {card.name}
                  </p>
                  <p className="text-xl text-gray-500 font-semibold mt-2">
                    $ {card?.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSelling;
