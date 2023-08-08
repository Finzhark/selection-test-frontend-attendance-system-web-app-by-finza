import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
// import './App.css';
import LoginPage from './pages/auth/login';
import HomePage from './pages/home';
import EmployeeDashboard from './pages/employee/dashboard';
// import Profile from './components/Profile';
import Switcher from './components/change-mode/switcher';
import RegisterEmployeePage from './pages/admin/register-employee';

function App() {
    return (
        <div className="App bg-slate-200 bg-myBgLight bg-repeat dark:bg-myBgGreen dark:bg-green-400 dark:bg-scroll">
            <span className='absolute'><Switcher /></span>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/dashboard' element={<EmployeeDashboard/>}/>
                <Route path='/register' element={<RegisterEmployeePage/>} />
            </Routes>
        </div>
    );
}

export default App;
