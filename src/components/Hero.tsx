export const Hero = () => {
  return (
    <div className="relative w-full h-full flex justify-between align-self-start xl:pl-[64px]">
      <div className="flex flex-col gap-6 xl:py-[64px]">
        <div className="uppercase font-libre text-[80px] text-forest-green font-extrabold">
          Zeniva <span className="text-lg text-mist-green">skin solution</span>
        </div>
        <p className="font-geologica text-[16px] text-forest-green xl:w-[500px]">
          Our beauty salon is dedicated to providing you with a luxurious and
          rejuvenating experience. We believe that beauty is a reflection of
          your inner self and we are here to help you achieve your skincare
          goals.
        </p>
        <button className="bg-apple-red xl:text-[18px] cursor-pointer w-fit xl:mt-5 text-relax-yellow font-geologica px-16 py-4 rounded-br-full">
          Consultation
        </button>
      </div>
      <img src="/hero.jpg" className="w-[580px] h-[700px] rounded-tl-full" />
      <img
        src="/mask.jpg"
        className="w-[300px] h-[200px] rounded-tl-[50%] absolute transform -translate-y-1/2 top-[85%] right-[45%]"
      />
    </div>
  );
};
