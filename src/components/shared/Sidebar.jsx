import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, Settings, Share2, X } from 'lucide-react';
import { useAppContext } from '../../context/useAppContext';
import { Logo } from './Logo';
import './Sidebar.css';

const Sidebar = () => {
  const { pendingCount, sidebarOpen, closeSidebar } = useAppContext();

  return (
    <>
      {/* Mobile backdrop overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={closeSidebar}
          role="presentation"
          aria-hidden="true"
        />
      )}

      <aside
        className={`sidebar glass-panel ${sidebarOpen ? 'open' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="sidebar-header">
          <div className="logo">
            <Logo size={32} />
            <h2>RespAI</h2>
          </div>
          <button
            className="sidebar-close-btn"
            onClick={closeSidebar}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="sidebar-nav" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeSidebar}
          >
            <LayoutDashboard size={20} aria-hidden="true" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/approvals"
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeSidebar}
          >
            <CheckSquare size={20} aria-hidden="true" />
            <span>Approval Queue</span>
            {pendingCount > 0 && (
              <span
                className="badge badge-negative badge-sm"
                aria-label={`${pendingCount} pending approvals`}
              >
                {pendingCount}
              </span>
            )}
          </NavLink>
          <NavLink
            to="/integrations"
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeSidebar}
          >
            <Share2 size={20} aria-hidden="true" />
            <span>Integrations</span>
          </NavLink>
          <NavLink
            to="/settings"
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeSidebar}
          >
            <Settings size={20} aria-hidden="true" />
            <span>Settings</span>
          </NavLink>
        </nav>
        
        <div className="sidebar-footer">
          <div className="user-profile">
            <img
              src="https://ui-avatars.com/api/?name=Admin&background=8b5cf6&color=fff"
              alt="Admin User avatar"
            />
            <div>
              <h4>Admin User</h4>
              <p>Pro Plan</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
