import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
