import './App.css';
import Buttons from './components/Buttons/Buttons';
import { useEffect, useState } from 'react';
import FirstSpace from './components/FirstSpace/FirstSpace';
import SecondSpace from './components/SecondSpace/SecondSpace';

function App() {
  const [currentBg, setCurrentBg] = useState(1);

  return (
    <div className='app'>
      <Buttons 
        currentBg={currentBg}
        setCurrentBg={setCurrentBg}/>
      {currentBg === 1 && <FirstSpace />}
      {currentBg === 2 && <SecondSpace />}
    </div>
  );
}

export default App;
