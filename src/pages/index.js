import Image from 'next/image';

import Logo from '../../public/usbTypes.png';

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-[2fr_2fr] gap-2 p-2">
        <Image src={Logo} alt="grid image" width={150} height={100} />
        <Image src={Logo} alt="grid image" width={150} height={100} />
        <Image src={Logo} alt="grid image" width={150} height={100} />
        <Image src={Logo} alt="grid image" width={150} height={100} />
      </div>
      <div className="snap-x overflow-x-auto flex w-full gap-4 mb-5">
        <div className="min-w-[80%] mg:min-w-[40%] snap-center">
          <Image src={Logo} alt="logo image" />
        </div>
        <div className="min-w-[80%] mg:min-w-[40%] snap-center">
          <Image src={Logo} alt="logo image" />
        </div>
        <div className="min-w-[80%] mg:min-w-[40%] snap-center">
          <Image src={Logo} alt="logo image" />
        </div>
        <div className="min-w-[80%] mg:min-w-[40%] snap-center">
          <Image src={Logo} alt="logo image" />
        </div>
      </div>
    </main>
  );
}
