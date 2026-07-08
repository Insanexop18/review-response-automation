import { useState } from 'react';
import { CheckCircle2, Link as LinkIcon, RefreshCw, AlertCircle } from 'lucide-react';
import './Integrations.css';

const mockIntegrations = [
  {
    id: 'google',
    name: 'Google Business Profile',
    description: 'Sync reviews and post automated responses directly to Google.',
    status: 'connected',
    lastSync: '10 mins ago',
    icon: 'G',
    color: '#4285f4'
  },
  {
    id: 'trustpilot',
    name: 'Trustpilot',
    description: 'Manage your brand reputation and respond to Trustpilot reviews.',
    status: 'connected',
    lastSync: '1 hour ago',
    icon: 'T',
    color: '#00b67a'
  },
  {
    id: 'facebook',
    name: 'Facebook Pages',
    description: 'Handle recommendations and reviews on your Facebook Page.',
    status: 'error',
    lastSync: '2 days ago',
    icon: 'F',
    color: '#1877f2'
  },
  {
    id: 'yelp',
    name: 'Yelp',
    description: 'Engage with Yelp reviewers using AI-crafted responses.',
    status: 'disconnected',
    lastSync: null,
    icon: 'Y',
    color: '#FF1A1A'
  }
];

const Integrations = () => {
  const [integrations, setIntegrations] = useState(mockIntegrations);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = (id) => {
    setIsSyncing(id);
    setTimeout(() => {
      setIsSyncing(null);
      setIntegrations(prev => prev.map(int => 
        int.id === id ? { ...int, lastSync: 'Just now', status: 'connected' } : int
      ));
    }, 1500);
  };

  return (
    <div className="integrations animate-fade-in">
      <header className="page-header">
        <div>
          <h1>Integrations</h1>
          <p>Connect your review platforms to enable AI automation.</p>
        </div>
      </header>

      <div className="integrations-grid">
        {integrations.map(integration => (
          <div key={integration.id} className="integration-card glass-panel">
            <div className="integration-header">
              <div 
                className="integration-icon"
                style={{ backgroundColor: integration.color }}
              >
                {integration.icon}
              </div>
              <div className="status-badge">
                {integration.status === 'connected' && (
                  <span className="badge badge-positive"><CheckCircle2 size={12} /> Connected</span>
                )}
                {integration.status === 'error' && (
                  <span className="badge badge-negative"><AlertCircle size={12} /> Action Needed</span>
                )}
                {integration.status === 'disconnected' && (
                  <span className="badge badge-neutral">Not Connected</span>
                )}
              </div>
            </div>
            
            <div className="integration-content">
              <h3>{integration.name}</h3>
              <p>{integration.description}</p>
            </div>

            <div className="integration-footer">
              {integration.status !== 'disconnected' ? (
                <>
                  <span className="last-sync">Synced: {integration.lastSync}</span>
                  <button 
                    className="btn btn-secondary btn-icon" 
                    onClick={() => handleSync(integration.id)}
                    disabled={isSyncing === integration.id}
                  >
                    <RefreshCw size={16} className={isSyncing === integration.id ? 'spin' : ''} />
                    {isSyncing === integration.id ? 'Syncing...' : 'Sync'}
                  </button>
                </>
              ) : (
                <button className="btn btn-primary" style={{width: '100%'}}>
                  <LinkIcon size={16} /> Connect Account
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
