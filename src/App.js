import './App.css';
import { useEffect } from 'react';
const tg = window.Telegram.WebApp

function App() {
  useEffect(() => {
    tg.ready()
  }
  )

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      ytllo
      <buttom onClick={onClose}>Close</buttom>
    </div>
  );
}

export default App;
