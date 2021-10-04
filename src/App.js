import logo from './logo.svg';
import './App.css';
import ApplicationForm from './components/ApplicationForm';
import List from './components/List';
import CartItems from './components/CartItems';

function App() {
  return (
   <div className="container">
      <ApplicationForm/>
      <List/>
      <CartItems/>
     
   </div>
  );
}

export default App;
