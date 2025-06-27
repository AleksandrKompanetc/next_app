import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes path="/" element={<Home />} />
    </>
  );
}

export default App;

// hr - хорватский,
// pt - Бразилия(португальский),
// bn - Бангладеш(бенгальский), -цифры
// nl - Бельгия(нидерландский),
// az - Азербайджанский,
// ay - Аймара(Боливия),
// ru - русский,
// cs - Чешский,
// da - Дания(датский),
// ar - Египет(арабский), -цифры
// et - Эстонский,
// fi - Финский,
// sv - Шведский,
// Гонконг(кантонский) - нет,
