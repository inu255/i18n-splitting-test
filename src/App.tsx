import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useTranslation } from 'react-i18next';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FirstComponent/>
      <SecondComponent/>

    </div>
  )
}

export default App
