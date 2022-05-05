
import Navbar from './components/Navbar';
import './App.css';
import BasicForm from './components/basicForm';
import UserForm from './components/UserForm';
import {BrowserRouter as Router, Routes, Route , Link} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Dashboard from './components/Dashboard';
import Student from './components/Student';
// import MockData from './components/MockData.json';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul class="navbar-nav ml-auto">
         <li class="nav-item">
            <a class="nav-link">
              <Link to="/" style={{paddingLeft: 13, textDecoration: 'none' }}>Result</Link>&nbsp;
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
             <Link to="/login" style={{paddingLeft: 13, textDecoration: 'none' }}>Login</Link>&nbsp;
            </a>
          </li>
            
        </ul> 
        
      </nav>
        
       
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/login" element={<BasicForm />} />
        <Route path="/data" element={<Dashboard />} />
        <Route path="/student" element={<Student />} />
        <Route path="*" element={<ErrorPage />} />
       </Routes> 
    </Router>
    // <div className="App">
    //    <Navbar/>
    //    <UserForm/>
    //   <BasicForm/>
    // </div>
    
  );
}

export default App;
