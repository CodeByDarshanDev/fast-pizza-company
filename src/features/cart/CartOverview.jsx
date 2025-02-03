import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return;

  return (
    <div className="text:sm fixed bottom-0 flex  w-full items-center justify-between bg-stone-800 p-4 px-4 py-4 uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="text-semobold space-x-4 text-stone-300 sm:space-x-6 ">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
