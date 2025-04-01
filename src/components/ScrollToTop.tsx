import { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

export const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight * 0.5) {
          setShowBtn(true);
        } else {
          setShowBtn(false);
        }
      });
    };
  });

  return (
    showBtn && (
      <button
        className=" bg-happy-orange rounded-xl fixed bottom-10 right-5 z-[19] p-5 cursor-pointer shadow-2xl"
        onClick={goToTop}
      >
        <BiArrowToTop stroke="white" strokeWidth={2} className="w-5 h-5"/>
      </button>
    )
  );
};
