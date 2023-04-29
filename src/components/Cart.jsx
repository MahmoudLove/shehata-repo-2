import { BsFillCartFill } from 'react-icons/bs';
import { useCart } from 'react-use-cart';
import { useEffect, useState } from 'react';
export default function CartFlying() {
  const [cartLength, setCartLength] = useState(0);
  const { items } = useCart();
  useEffect(() => {
    setCartLength(items.length);
  }, [items]);
  return (
    <div className="fixed bottom-[5%] right-[5%] shadow-md w-12 h-12 rounded-full bg-green-500 p-2">
      <BsFillCartFill className="absolute top-[19%] right-[22%]  text-3xl" />
      <span className="absolute right-[43%] top-[22%] font-bold text-green-500">
        {cartLength}
      </span>
    </div>
  );
}
