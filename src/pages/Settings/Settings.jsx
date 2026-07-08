import { Bell, Palette, FileText } from 'lucide-react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings animate-fade-in">
      <header className="page-header">
        <div>
          <h1>Settings</h1>
          <p>Customize your AI response behavior and notification preferences.</p>
        </div>
      </header>

      <div className="settings-grid">
        <div className="settings-card glass-panel">
          <div className="settings-card-icon" style={{ background: 'rgba(139, 92, 246, 0.2)', color: 'var(--accent-primary)' }}>
            <Palette size={24} aria-hidden="true" />
          </div>
          <h2>Tone & Style</h2>
          <p>Control the tone of AI-generated responses — professional, friendly, empathetic, or custom.</p>
          <div className="setting-options">
            <label className="radio-option active">
              <input type="radio" name="tone" defaultChecked aria-label="Professional tone" /> Professional
            </label>
            <label className="radio-option">
              <input type="radio" name="tone" aria-label="Friendly tone" /> Friendly
            </label>
            <label className="radio-option">
              <input type="radio" name="tone" aria-label="Empathetic tone" /> Empathetic
            </label>
          </div>
        </div>

        <div className="settings-card glass-panel">
          <div className="settings-card-icon" style={{ background: 'rgba(16, 185, 129, 0.2)', color: 'var(--status-positive)' }}>
            <FileText size={24} aria-hidden="true" />
          </div>
          <h2>Response Templates</h2>
          <p>Manage custom templates for specific review types and scenarios.</p>
          <button className="btn btn-secondary" style={{ marginTop: '1rem' }}>
            Manage Templates
          </button>
        </div>

        <div className="settings-card glass-panel">
          <div className="settings-card-icon" style={{ background: 'rgba(236, 72, 153, 0.2)', color: 'var(--accent-secondary)' }}>
            <Bell size={24} aria-hidden="true" />
          </div>
          <h2>Notifications</h2>
          <p>Configure how you receive alerts for new reviews and escalations.</p>
          <div className="setting-options">
            <label className="toggle-option">
              <span>Email Alerts</span>
              <input type="checkbox" defaultChecked aria-label="Enable email alerts" />
            </label>
            <label className="toggle-option">
              <span>Slack Notifications</span>
              <input type="checkbox" defaultChecked aria-label="Enable Slack notifications" />
            </label>
            <label className="toggle-option">
              <span>Escalation Alerts</span>
              <input type="checkbox" defaultChecked aria-label="Enable escalation alerts" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
