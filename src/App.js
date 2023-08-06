import logo from './logo.svg';
import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import LoginPage from './pages/auth/login';
import BoxForm from './components/intro-page';
// import Profile from './components/Profile';

function App() {
    return (
        <div className="App bg-myBg h-screen">
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/example' element={<BoxForm />} />
            </Routes>
        </div>
    );
}

export default App;
