import { useState } from 'react';
import MainMint from './components/MainMint.js';
import NavBar from './components/NavBar.js';
import './App.css';

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className='overlay'>
      <div className="App">
        <NavBar accounts={accounts} setAccounts = {setAccounts} />
        <MainMint accounts={accounts} />  
      </div>
      <div className='moving-background'></div>
    </div>
  );
}
 
export default App;
