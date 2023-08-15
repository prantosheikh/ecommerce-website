
const ArtDeco = () => {
    return (
        <div className="flex justify-around items-center gap-8 pt-[80px] px-[80px] mt-[100px]">
        <div className="w-1/2">
          <img
            onScroll="hover:scale-110"
            src="https://i.ibb.co/V3rLzMR/art-deco-home.png"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-gray-800 text-base font-bold mb-4">
            FEATURED PRODUCT
          </h1>
          <h1 className="text-4xl my-2 font-bold relative group cursor-pointer mb-6 hover:text-yellow-600 transition duration-300 transition-delay-500 ease-in-out">
            Nancy Chair
            <span className="absolute -bottom-2 left-0 w-1/4 h-0.5 bg-yellow-600 transform origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-2 "></span>
          </h1>
  
          <p className="text-gray-600 text-lg space-x-2 space-y-5">
            When an unknown printer took a galley of type and scrambled it to{" "}
            <br /> make a type specimen book. Excepteur sint occaecat cupidatat
            non <br />
            proident, sunt in culpa qui officia.
          </p>
  
          <p className="mt-10 py-2 px-10 border border-black font-bold w-1/3 text-center hover:bg-black transition duration-300 transition-delay-500 ease-in-out hover:text-white">
            Only $90
          </p>
        </div>
      </div>
    );
};

export default ArtDeco;