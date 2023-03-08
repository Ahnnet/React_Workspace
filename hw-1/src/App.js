import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserInfo from './pages/UserInfo';
import CarInfo from './pages/CarInfo';
import NoPages from './pages/NoPage';
import Home from './pages/Home';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path = "userinfo" element={<UserInfo/>}/>
      <Route path = "carinfo" element={<CarInfo/>}/>
      <Route path = "*" element={<NoPages/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
