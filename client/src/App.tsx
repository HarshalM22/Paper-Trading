import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './pages/landing'
import { SignupPage } from './pages/Signup';
import { SigninPage } from './pages/Signin';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
