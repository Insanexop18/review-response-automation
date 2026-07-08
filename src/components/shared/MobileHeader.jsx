import { Menu } from 'lucide-react';
import { useAppContext } from '../../context/useAppContext';
import './MobileHeader.css';

const MobileHeader = () => {
  const { toggleSidebar } = useAppContext();

  return (
    <header className="mobile-header">
      <button
        className="hamburger-btn"
        onClick={toggleSidebar}
        aria-label="Open navigation menu"
      >
        <Menu size={24} />
      </button>
      <div className="mobile-logo">
        <div className="logo-icon-sm pulse" aria-hidden="true"></div>
        <span>RespAI</span>
      </div>
      <div className="mobile-header-spacer" aria-hidden="true"></div>
    </header>
  );
};

export default MobileHeader;
