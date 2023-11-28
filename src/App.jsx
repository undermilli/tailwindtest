import { Routes, Route } from 'react-router-dom'; // Importing necessary components from react-router-dom
import Ex from './pages/ex';
import Login from './pages/login';
import Signin from './pages/signin';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Ex />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signin' element={<Signin />} />
    </Routes>
  );
}
