export const Card = ({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col h-[420px]">
      <img
        src={src}
        alt={title}
        className="w-full object-cover w-[400px] h-[217.33px]"
      />
      <div className="flex flex-col bg-white gap-2 p-6 h-full">
        <h3 className="font-geologica uppercase text-forest-green font-semibold text-[16px]">
          {title}
        </h3>
        <p className="font-geologica text-[14px] h-full">{description}</p>
        <button className="bg-happy-orange cursor-pointer w-fit text-relax-yellow font-geologica px-8 py-2 rounded-br-[50px]">
          Book Now
        </button>
      </div>
    </div>
  );
};
