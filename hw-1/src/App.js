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
    <div>
      <h1 align="center">Welcome to the Service</h1>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path = "carinfo" element={<CarInfo/>}/>
      <Route path = "userinfo" element={<UserInfo/>}/>
      <Route path = "*" element={<NoPages/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
