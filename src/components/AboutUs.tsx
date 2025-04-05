import { Image } from "@/components/shared/Image";

export const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="relative w-full flex xl:py-[64px] pr-[64px]"
    >
      <div className=" w-[450px] h-[750px] bg-mist-green rounded-bl-full">
        <Image
          src="/mask2.jpg"
          alt="about-us"
          className="absolute w-[500px] h-[630px] rounded-bl-[70%] left-[5%] top-1/7 shadow-lg"
        />
      </div>
      <div
        style={{ alignItems: "self-end" }}
        className="flex flex-col gap-6 xl:py-[64px] w-full"
      >
        <h2 className="font-libre text-forest-green text-[60px] font-semibold">
          About Us
        </h2>
        <p className="font-geologica text-[18px] xl:w-[550px]">
          At Zeniva, we believe in the power of innovation, design, and
          technology to create seamless experiences. Our mission is to provide
          cutting-edge solutions that empower businesses and individuals to
          achieve their full potential. <br />
          <br />
          Zeniva is a team of passionate beauty professionals dedicated to
          excellence, creativity, and customer satisfaction. We specialize in
          delivering high-quality services across various domains, ensuring that
          our clients always stay ahead in their industries.
        </p>
      </div>
    </section>
  );
};
