import { Image } from "@/components/shared/Image";


export const CustomerCard = ({name, img, review}: {name: string, img: string, review: string}) => {
  return (
    <div className="bg-white p-2 flex flex-col gap-4 xl:p-4">
      <Image src={img} alt={name} className="w-fit self-center h-[300px]"/>
      <div className="flex flex-col gap-2 text-[14px] text-forest-green">
        <h4 className="uppercase font-black">{name}</h4>
        <p className="font-geologica">{review}</p>
      </div>
    </div>
  );
}
