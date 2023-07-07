/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helper';

function Income_Expense({ type, amount }) {
  return (
    <div className="flex-1 text-center">
      <div className="flex flex-col">
        <span className="uppercase font-medium">{type}</span>
        <span className="text-4xl font-bold">
          {formatCurrency(Math.abs(amount))}
        </span>
      </div>
    </div>
  );
}

export default Income_Expense;
