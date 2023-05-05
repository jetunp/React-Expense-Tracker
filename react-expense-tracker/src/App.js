import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import TransactionsList from './components/TransactionsList';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionsList />
          <AddTransaction />
      </div>
      
    </div>
  );
}

export default App;
