import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../public/usbTypes.png';

export default function CategoriesCards({ cards }) {
  console.log(cards);
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-x-2 gap-y-4 hover:shadow-md hover:shadow/black/20 hover:border-cyan-400 border-[.5px]">
      {cards.map((card) => {
        return (
          <Link key={card.slug} href={`/sub/${card.slug}`}>
            <div className="text-center shadow-active">
              <Image
                src={Logo}
                alt="image af"
                width={100}
                height={100}
                className="rounded-lg inline-block"
              ></Image>
              <h1 className="text-center text-sm">{card.name}</h1>
              <h3 className="text-blue-400">{card.numberofSubCate}Product</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
