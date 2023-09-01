import RandomNumberGen from './components/random-number-generator';
import DestinationSearch from './components/destination-search';
import SimpleTodo from './components/simple-todos';
import CashWithdrawal from './components/cash-withdrawal';
import GoogleSearch from './components/google-search-suggesstions';
import './App.css';

const App = () => {
  return (
    <>
      <RandomNumberGen />
      <DestinationSearch />
      <SimpleTodo />
      <CashWithdrawal />
      <GoogleSearch />
    </>
  );
}

export default App;
