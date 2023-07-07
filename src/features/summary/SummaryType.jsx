import { useSelector } from 'react-redux';
import Income_Expense from './Income_Expense';
import { getExpense, getIncome } from '../transaction/accountSlice';

function SummaryType() {
  const income = useSelector(getIncome);
  const expense = useSelector(getExpense);

  return (
    <div className="flex items-center w-full bg-sky-500 rounded-md h-36 mt-8">
      <Income_Expense type="income" amount={income} />
      <span className="bg-gray-300 h-10 w-[1px]"></span>
      <Income_Expense type="expense" amount={expense} />
    </div>
  );
}

export default SummaryType;
