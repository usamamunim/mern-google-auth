import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Dashboard from './components/pages/dashboard/Dashboard';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
