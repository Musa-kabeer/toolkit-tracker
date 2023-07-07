import { useSelector } from 'react-redux';
import HistoryItem from './HistoryItem';
import { getHistory } from '../transaction/accountSlice';

function History() {
  const histories = useSelector(getHistory);

  return (
    <ul className="py-5 flex flex-col text-gray-100 gap-4">
      {!histories.length ? (
        <p className="text-gray-700 font-medium">
          Start by add transaction 👇.There is no history yet 😓.
        </p>
      ) : (
        histories.map((history, i) => (
          <HistoryItem key={i + 1} history={history} />
        ))
      )}
    </ul>
  );
}

export default History;
