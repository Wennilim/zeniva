import { NavLinks } from "@/components/shared/NavLinks";
import { headerButtonStyle } from "@/styles/header";
import { Image } from "@/components/shared/Image";

export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full xl:px-[50px] font-geologica text-lg bg-mist-green text-relax-yellow">
      <Image src="/logo.png" alt="logo-zeniva" className="w-48" />
      <div className="flex gap-32">
        <NavLinks gap="gap-12" />
        <div className="flex flex-col gap-1">
          {["EN", "ZH"].map((item) => (
            <button key={item} className={headerButtonStyle}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
