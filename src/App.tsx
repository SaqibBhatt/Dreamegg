import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pagenavbar from './dreamegg/Navbar/navbar';
import MainPage from './dreamegg/Mainpage/main';
function App() {
  return (
    <div className="Dreamegg">
      <BrowserRouter>
      <Pagenavbar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
