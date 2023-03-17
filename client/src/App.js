import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import { UserProvider } from './contexts/UserContext';

import Home from './pages/Home/Home';
import { CaptchaProvider } from './contexts/CaptchaContext';
function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <CaptchaProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/auth" />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </CaptchaProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
