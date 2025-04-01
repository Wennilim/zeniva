import { NAV_LINKS } from "@/constants/navlinks";
import { headerButtonStyle } from "@/styles/header";
import { cn } from "@/utils/cn";

export const NavLinks = ({
  vertical,
  gap = "gap-3",
}: {
  vertical?: boolean;
  gap?: string;
}) => {
  return (
    <nav className={cn("flex", gap, vertical && "flex-col")}>
      {NAV_LINKS.map((item, index) => (
        <button>
          <span key={index} className={headerButtonStyle}>
            {item}
          </span>
        </button>
      ))}
    </nav>
  );
};
