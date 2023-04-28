import Image from 'next/image';

import Logo from '../../public/usbTypes.png';
import ScrollableImages from '@/components/ScrollableImages';
import HeaderElement from '@/components/HeaderElement';
export default function Home() {
  const images = [Logo, Logo, Logo, Logo, Logo];
  return (
    <main>
      <div className="grid grid-cols-[2fr_2fr] gap-2 p-2">
        <Image src={Logo} alt="grid image" width={150} height={100} />
        <Image src={Logo} alt="grid image" width={150} height={100} />
        <Image src={Logo} alt="grid image" width={150} height={100} />
        <Image src={Logo} alt="grid image" width={150} height={100} />
      </div>
      <ScrollableImages images={images} className="mb-3" />
      <HeaderElement header={'Most sold Weekly'} />
    </main>
  );
}
