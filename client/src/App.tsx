import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './pages/landing'
import { SignupPage } from './pages/Signup';
import { SigninPage } from './pages/Signin';
import { PageProvider } from './context/pageprovider';

function App() {

  return (
    <div>
      <PageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
          </Routes>
        </BrowserRouter>
      </PageProvider>
    </div>
  )
}

export default App
