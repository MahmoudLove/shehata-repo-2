import Image from 'next/image';
import Head from 'next/head';
import { useRef, useEffect } from 'react';
import { GiMedicines } from 'react-icons/gi';
import Logo from '../../public/usbTypes.png';
import { useState } from 'react';
export default function Header() {
  // const headerRef = useRef();
  // const divToAddMargin = useRef();
  // const [sticky, setSticky] = useState();
  // console.log(sticky);
  // const marginAdder = (enteries) => {
  //   const [entry] = enteries;
  //   console.log('fafa');
  //   if (entry.isIntersecting) {
  //     console.log('yes');
  //     setSticky(false);
  //   } else {
  //     console.log('no');
  //     setSticky(false);
  //   }
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(marginAdder, {
  //     root: null,
  //     threshold: 0,
  //     rootMargin: '100px',
  //   });
  //   if (headerRef.current) observer.observe(headerRef.current);

  //   return () => {
  //     if (headerRef.current) observer.unobserve(headerRef.current);
  //   };
  // }, []);

  return (
    <div>
      <main
        className={`bg-green-400 pt-3 px-3`}
        // ref={headerRef}
      >
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
      <div ref={divToAddMargin}></div>
    </div>
  );
}
