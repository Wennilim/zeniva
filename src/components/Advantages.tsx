import { HiMiniShieldCheck } from "react-icons/hi2";
import ourAvantagesData from "@/data/advantage.json";
export const Advantages = () => {
  return (
    <section id="our-advantages" className="px-4">
      <h1 className="text-forest-green font-libre xl:text-[60px] font-semibold xl:py-[60px] xl:pl-[50px]">
        Our Advantages
      </h1>
      <div className="flex gap-8 xl:p-[50px]  bg-mist-green rounded-bl-[180px] rounded-tr-[180px]">
        {ourAvantagesData.map((item) => (
          <div key={item.id} className="flex gap-2 p-4">
            <HiMiniShieldCheck className="w-24 h-8 text-happy-orange" />
            <div className="flex flex-col gap-4">
              <h2 className="font-geologica text-happy-orange font-semibold text-[20px] uppercase">
                {item.title}
              </h2>
              <p className="font-geologica text-[16px] text-relax-yellow">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
