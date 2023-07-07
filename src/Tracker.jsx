import Summary from './features/summary/Summary';
import Histories from './features/History/Histories';
import Logo from './ui/Logo';
import Transaction from './features/transaction/Transaction.jsx';

function Tracker() {
  return (
    <div className="w-full text-gray-700">
      <div className="w-11/12 bg-sky-50 m-auto px-5 py-3 md:w-[600px]">
        <Logo />
        <Summary />
        <Histories />
        <Transaction />
      </div>
    </div>
  );
}

export default Tracker;
