import Image from 'next/image';

import Logo from '../../public/usbTypes.png';
import Medicine from '../../public/medicine.jpg';
export default function SubCateCard({ cards }) {
  return (
    <div className="grid grid-cols-[1fr_1fr] auto-rows-[100px] grid-rows-[100px] gap-x-3 gap-y-4 rounded-lg">
      {cards.map((card) => {
        return (
          <div
            key={card.slug}
            className="text-center shadow-active relative hover:shadow-md"
          >
            <Image
              src={Medicine}
              alt="logo image"
              width={100}
              height={160}
              className=" inline-block h-full w-full rounded-lg"
            />
            <span className="absolute bottom-[30%] right-[50%] translate-x-[50%] text-black">
              {card.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
