import Image from 'next/image';
import Head from 'next/head';
import { GiMedicines } from 'react-icons/gi';

import Logo from '../../public/usbTypes.png';
export default function Header() {
  return (
    <main className="bg-red-300 pt-3 px-3">
      <Head>
        <title>Shehata</title>
      </Head>
      <div className="flex justify-between items-center mb-3">
        <GiMedicines className="inline-block text-4xl " />
        <GiMedicines className="inline-block text-4xl " />
        <Image
          src={Logo}
          alt="header logo"
          width={90}
          height={60}
          className="mix-blend-multiply "
        />
        <GiMedicines className="inline-block text-4xl " />
      </div>
      <div className="grid  grid-cols-[3fr_1fr] gap-1 pb-1">
        <form>
          <input
            type="search"
            placeholder="Search by Name or Active Ingerient"
            className="bg-white/30  border border-white/50  rounded-full py-1 px-1 placeholder:text-white placeholder:text-xs outline-none caret-white"
          />
        </form>
        <form className="">
          <select className="bg-white/30 border border-white/50  rounded-full py-1 px-1 text-white placeholder:text-xs outline-none">
            <option value="">Medicines</option>
            <option value="">Health</option>
            <option value="">Herbs</option>
            <option value="">Gifts</option>
          </select>
        </form>
      </div>
    </main>
  );
}
