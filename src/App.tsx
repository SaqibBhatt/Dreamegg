import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pagenavbar from './dreamegg/Navbar/navbar';
function App() {
  return (
    <div className="Dreamegg">
      <BrowserRouter>
      <Pagenavbar/>
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
