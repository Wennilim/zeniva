import { NavLinks } from "@/components/shared/NavLinks";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const CONTACT_DETAILS = [
  { icon: AiOutlineMail, text: "zeniva@gmail.com" },
  { icon: FaLocationDot, text: "SingHealth Tower, Singapore" },
  { icon: BiPhone, text: "+65 6222 3322" },
];

const ContactInfo = () => (
  <address className="flex flex-col gap-2 not-italic">
    {CONTACT_DETAILS.map(({ icon: Icon, text }, index) => (
      <span key={index} className="flex gap-2 items-center">
        <Icon className="w-4 h-4 text-relax-yellow" />
        {text}
      </span>
    ))}
  </address>
);

export const Footer = () => {
  return (
    <footer className="bg-mist-green text-relax-yellow font-geologica w-full px-8 py-12 xl:p-[50px] flex flex-col items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <img
          src="/logo.png"
          alt="Zeniva Logo"
          className="w-48 h-28 mx-auto md:mx-0"
        />
        <NavLinks gap="gap-3" vertical />
        <ContactInfo />
      </div>

      <hr className="w-full border-t border-relax-yellow my-5" />

      <div className="w-full flex flex-col md:flex-row justify-between text-sm text-center md:text-left">
        <span>© 2025 Zeniva. All rights reserved.</span>
        <span>
          *Pictures sourced from{" "}
          <a
            href="https://unsplash.com"
            className="underline hover:text-happy-orange"
          >
            Unsplash
          </a>{" "}
          for educational purposes.
        </span>
      </div>
    </footer>
  );
};
