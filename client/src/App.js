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
import { CapatchaProvider } from './contexts/CapatchaContext';
function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <CapatchaProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/auth" />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </CapatchaProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
