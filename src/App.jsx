import { Routes, Route, Navigate } from 'react-router-dom'; // Importing necessary components from react-router-dom
import Ex from './pages/ex';
import Login from './pages/login';
import Signin from './pages/signin';

export default function App() {
  const isLogin = localStorage.getItem('accessToken');

  return (
    <Routes>
      <Route path='/' element={<Ex />} />
      <Route path='/login' element={isLogin ? <Navigate to='/' /> : <Login />} />
      <Route path='/signin' element={isLogin ? <Navigate to='/' /> : <Signin />} />
    </Routes>
  );
}
