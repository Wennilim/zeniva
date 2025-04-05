import { cn } from "@/utils/cn";
import { useState } from "react";

type TImageProps = {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
};

export const Image = ({
  src,
  alt,
  className,
  skeletonClassName,
}: TImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <div
          className={cn(
            "absolute inset-0 animate-pulse bg-gray-300 rounded",
            skeletonClassName
          )}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="eager"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "transition-opacity duration-300",
          !isLoaded && "opacity-0",
          isLoaded && "opacity-100",
          className
        )}
      />
    </>
  );
};
