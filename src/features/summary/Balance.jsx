import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import {
  fetchCurrency,
  getBalance,
} from '../transaction/accountSlice';
import { formatCurrency } from '../../utils/helper';

function Balance() {
  const balance = useSelector(getBalance);
  const dispatch = useDispatch();

  function handleEurConversion() {
    dispatch(fetchCurrency('EUR', balance));
  }

  function handleNairaConversion() {
    dispatch(fetchCurrency('GBP', balance));
  }

  const { currency } = useSelector((state) => state.account);

  return (
    <div className="grid grid-cols-2 h-28">
      <div className="bg-sky-900 grid gap-1 p-2">
        <h3 className="text-sm font-bold uppercase">your balance</h3>
        <span className="font-bold text-4xl">{`${formatCurrency(
          balance
        )}`}</span>
      </div>

      <div className="bg-sky-800 flex flex-col justify-between p-2">
        <h3 className="text-sm font-bold uppercase">
          convert balance:
        </h3>
        <span>
          {currency.amount} {currency.type}
        </span>
        <div className="flex gap-3 mb-2">
          <Button type="small" onClick={handleEurConversion}>
            eur
          </Button>
          <Button type="small" onClick={handleNairaConversion}>
            GBP
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Balance;
