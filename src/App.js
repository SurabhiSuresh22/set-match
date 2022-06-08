import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import General from './components/General';
import Type from './components/Type';
import Teams from './components/Teams';
import Match from './components/Match';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Type/>} exact/>
        <Route path="/General" element={<General/>}/>
        <Route path="/Teams" element={<Teams/>}/>
        <Route path="/Match" element={<Match/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
