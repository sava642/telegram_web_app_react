import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form/Form';
import ProductList from './components/ProductList/ProductList';

function App() {
  const { tg, onClose, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready()
  }
  )

  return (
    <div className="App">
      hello
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
      {/* <button onClick={onToggleButton}>onToggleButton</button>
      <button onClick={onClose}>Close</button> */}
    </div>
  );
}

export default App;
