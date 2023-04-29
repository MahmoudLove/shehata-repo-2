import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

import SubCateCard from '@/components/SubCateCard';
import { dbConnect } from '@/utils/DB/DBEssentials';
import MainCateModel from '@/utils/DB/models/MainCateModel';
import SubCateModel from '@/utils/DB/models/SubCateModel';
import Link from 'next/link';
export default function SubCatePage({ subCate, mainSlug }) {
  return (
    <div className="">
      <div className="bg-green-600 h-[120px] w-full uppercase p-2">
        <h1 className="text-center text-4xl text-white uppercase pb-2">
          {mainSlug}
        </h1>
        <figure className="flex  items-center">
          <Link
            href="/"
            className="text-white hover:-translate-y-1 transition-all"
          >
            Home
          </Link>
          <MdKeyboardDoubleArrowRight className="inline-block text-2xl text-black/60" />
          <span className="uppercase text-white">{mainSlug}</span>
        </figure>
      </div>
      <div className="p-3">
        <h1 className="text-right text-black/60">{mainSlug}</h1>

        <SubCateCard cards={subCate} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  dbConnect();
  let paths = [];
  const mainCate = await MainCateModel.find();
  if (mainCate) {
    paths = [
      ...paths,
      ...mainCate.map((main) => ({
        params: { slug: main.slug },
      })),
    ];
  }
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  dbConnect();
  const mainSlug = context.params.slug;
  let subCate = await SubCateModel.find({ mainCateSlug: mainSlug });
  subCate = subCate.map((sub) => {
    return {
      id: `${sub.id}`,
      name: sub.name,
      imageUrl: sub.imageUrl,
      slug: sub.slug,
    };
  });
  return { props: { subCate, mainSlug } };
}
