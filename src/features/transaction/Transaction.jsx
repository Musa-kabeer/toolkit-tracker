import Button from '../../ui/Button';
import { Form } from 'react-router-dom';
import store from '../../store';
import { addTransaction } from './accountSlice';

function Transaction() {
  return (
    <div>
      <h1 className="py-4 text-3xl font-semibold">
        Add new transaction
      </h1>
      <hr />

      <Form className="py-4 flex flex-col gap-7" method="POST">
        <div className="">
          <label htmlFor="" className="font-bold italic">
            Type
          </label>
          <br />
          <input
            type="text"
            name="text"
            className="mt-2 w-9/12 px-2 rounded-md h-10 bg-transparent border-2 outline-none focus:ring-2 focus:border-0"
            placeholder="Transaction type...."
            required
          />
        </div>
        <div>
          <label htmlFor="" className="font-bold italic">
            Amount (Negative = expense,Positive = income)
          </label>
          <br />
          <input
            type="text"
            name="amount"
            className="mt-2 w-9/12 px-2 rounded-md h-10 bg-transparent border-2 outline-none focus:ring-2 focus:border-0"
            placeholder="Transaction amount...."
            required
          />
        </div>
        <Button type="transaction">Add transaction</Button>
      </Form>
    </div>
  );
}

export default Transaction;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const res = {
    ...data,
    amount: Number(data.amount),
  };

  store.dispatch(addTransaction(res));
  return null;
};
