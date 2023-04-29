import Image from 'next/image';

import Logo from '../../public/usbTypes.png';
import ScrollableImages from '@/components/ScrollableImages';
import HeaderElement from '@/components/HeaderElement';
// import ProductsModel from '@/utils/DB/models/ProductsModel';
import MainCateModel from '@/utils/DB/models/MainCateModel';
import SubCateModel from '@/utils/DB/models/SubCateModel';
import { dbConnect } from '@/utils/DB/DBEssentials';
import CategoriesCards from '@/components/CategoriesCard';

export default function Home({ mainCates }) {
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
      <HeaderElement header={'Most sold Weekly'} className="mb-5" />
      <HeaderElement header={'Categories'} />
      <CategoriesCards cards={mainCates} />
    </main>
  );
}

export async function getServerSideProps(context) {
  dbConnect();

  let mainCates = await MainCateModel.find();
  mainCates = mainCates.map((cate) => {
    return {
      id: `${cate._id}`,
      name: cate.name,
      slug: cate.slug,
      imageUrl: cate.imageUrl,
      numberofSubCate: cate.numberofSubCate,
    };
  });
  return {
    props: { mainCates },
  };
}
