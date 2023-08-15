import  { useEffect, useState } from "react";
import moment from "moment"; // Import Moment.js

const DecoCollection = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="my-[100px]">
      <div className="relative">
        <img src="https://i.ibb.co/FwkqjYP/countdown.jpg" alt="" />
        <div className="absolute top-1/4 left-10 w-2/3">
          <h3 className="text-4xl font-semibold  my-2 relative group cursor-pointer mb-6 hover:text-yellow-600 transition duration-300 transition-delay-500 ease-in-out">
            Deco Collection <span className="text-red-600">50% OFF</span>
            <span className="absolute -bottom-2 left-0 w-1/4 h-0.5 bg-yellow-600 transform origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-2 "></span>
          </h3>
          <h2 className="my-8 text-lg text-gray-700">
            LThe standard chunk of Lorem Ipsum used since the 1500s is
            reproduced for those. Sections 1.10.32 and 1.10.33 from “de Finibus
            Bonorum et Malorum
          </h2>
          <div>
            <p className="text-4xl">
              {currentTime.format("MMMM Do YYYY, h:mm:ss a")}
            </p>
          </div>
          <button className="primary-btn mt-12">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default DecoCollection;
