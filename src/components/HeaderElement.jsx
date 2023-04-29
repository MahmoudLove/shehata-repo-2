import { AiOutlineStar } from 'react-icons/ai';
export default function HeaderElement({ header, className }) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="headerElement before:bg-black/40 before:h-[1px] before:block 
        after:bg-black/40 after:h-[1px] after:block"
      >
        <span className="border border-black/40 rounded-3xl p-3 text-green-400">
          {header}
        </span>
      </div>
      <AiOutlineStar className="absolute left-[10%] top-[20%] text-green-400 text-3xl bg-white" />
      <AiOutlineStar className="absolute right-[10%] top-[20%] text-green-400 text-3xl bg-white" />
    </div>
  );
}
