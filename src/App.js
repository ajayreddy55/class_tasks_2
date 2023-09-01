import RandomNumberGen from './components/random-number-generator';
import DestinationSearch from './components/destination-search';
import SimpleTodo from './components/simple-todos';
import CashWithdrawal from './components/cash-withdrawal';
import './App.css';

const App = () => {
  return (
    <>
      <RandomNumberGen />
      <DestinationSearch />
      <SimpleTodo />
      <CashWithdrawal />
    </>
  );
}

export default App;
