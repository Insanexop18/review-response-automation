import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Sidebar from './components/shared/Sidebar';
import MobileHeader from './components/shared/MobileHeader';
import Dashboard from './pages/Dashboard/Dashboard';
import ApprovalQueue from './pages/ApprovalQueue/ApprovalQueue';
import Integrations from './pages/Integrations/Integrations';
import Settings from './pages/Settings/Settings';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="main-wrapper">
            <MobileHeader />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/approvals" element={<ApprovalQueue />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
