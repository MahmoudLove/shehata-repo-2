import Image from 'next/image';
export default function ScrollableImages({ images, className }) {
  return (
    <div className="snap-x overflow-x-auto flex w-full gap-4 pb-5 ">
      {images.map((image, i) => {
        return (
          <div
            key={i}
            className={`min-w-[70%] mg:min-w-[35%] snap-center shadow-md shadow-black/20 ${className}`}
          >
            <Image src={image} alt="logo image" />
          </div>
        );
      })}
    </div>
  );
}
