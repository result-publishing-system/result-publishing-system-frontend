
// import Navbar from './components/Navbar';
import './App.css';

import BasicForm from './components/basicForm';
import UserForm from './components/UserForm';
import {BrowserRouter as Router, Routes, Route , Link} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Dashboard from './components/Dashboard';
import Student from './components/Student';
import Register from './components/Register';
import Navbar from './components/Navbar'

function App() {
  return (
    <Navbar/>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<UserForm />} />
    //     <Route path="/login" element={<BasicForm />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/student/register" element={<Register/>} />
    //     <Route path="/student" element={<Student />} />
    //     <Route path="*" element={<ErrorPage />} />
    //    </Routes> 
    // </Router>
  );
}

export default App;
