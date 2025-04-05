
type ShopItem = {
  id: number;
  img: string;
  name: string;
};

type DecorativeElement = {
  id: string;
  className: string;
};


const shopItems: ShopItem[] = [
  {
    id: 1,
    img: "/shop/shop-1.png",
    name: "shop 1",
  },
  {
    id: 2,
    img: "/shop/shop-2.jpg",
    name: "shop 2",
  },
  {
    id: 3,
    img: "/shop/shop-3.jpg",
    name: "shop 3",
  },
  {
    id: 4,
    img: "/shop/shop-4.jpg",
    name: "shop 4",
  },
];

const decorativeElements: DecorativeElement[] = [
  {
    id: "pinky-item",
    className:
      "absolute top-[10%] left-[150px] w-[400px] h-[250px] rounded-br-[50%] bg-tomato-red opacity-60 z-0",
  },
  {
    id: "orange-item",
    className:
      "absolute top-[65%] left-[250px] w-[250px] h-[250px] rounded-tr-[50%] rounded-bl-[50%] bg-happy-orange opacity-50 z-15",
  },
  {
    id: "green-item",
    className:
      "absolute top-[62%] right-[300px] w-[250px] h-[250px] rounded-br-[50%] bg-mist-green opacity-50 z-15",
  },
];

const ShopImage = ({
  item,
  className,
}: {
  item: ShopItem;
  className?: string;
}) => <img src={item.img} alt={item.name} className={className} />;


export const Shop = () => {
  return (
    <section id="our-shop" className="relative">
      <h1 className="flex self-center text-forest-green font-libre xl:text-[60px] font-semibold xl:pt-[60px] xl:pl-[50px]">
        Our Salon
      </h1>

      <div className="flex justify-center items-center w-full gap-4 scale-90 xl:py-2">
        {decorativeElements.map((element) => (
          <div
            key={element.id}
            id={element.id}
            className={`transform ${element.className}`}
          />
        ))}

        <ShopImage
          item={shopItems[0]}
          className="w-fit h-[450px] object-cover relative z-10"
        />

        <div className="flex flex-col gap-4 relative z-20">
          <ShopImage
            item={shopItems[1]}
            className="w-fit h-[450px] object-cover"
          />
          <ShopImage
            item={shopItems[2]}
            className="w-fit h-[450px] object-cover z-30"
          />
        </div>

        <ShopImage
          item={shopItems[3]}
          className="w-[500px] h-[450px] object-cover relative z-10"
        />
      </div>
    </section>
  );
};


