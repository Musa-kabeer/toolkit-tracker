/* eslint-disable react/prop-types */

function HistoryItem({ history }) {
  return (
    <li
      className={`bg-gray-500 flex items-center rounded-md justify-between border-r-8 ${
        history.amount > 0 ? 'border-r-green-500' : 'border-r-red-500'
      } p-2 cursor-pointer`}
    >
      <span className="text-xl font-medium">{history.text}</span>
      <span className="font-semibold">{`${
        history.amount > 0 ? '+' : ''
      }${history.amount}`}</span>
    </li>
  );
}

export default HistoryItem;
