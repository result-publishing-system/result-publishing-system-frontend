import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import StudentRegister from './components/student/StudentRegister';
import { Route, Routes } from 'react-router';
import Profile from './components/student/Profile';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/' element={<basicForm/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/register' element={<StudentRegister/>}></Route>
          <Route path='/student' element={<Profile/>}></Route>
      </Routes>
    </div> 
  );
}

export default App;
