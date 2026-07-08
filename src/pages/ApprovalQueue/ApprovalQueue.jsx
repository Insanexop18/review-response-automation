import { useState } from 'react';
import { Check, X, Edit2, Star } from 'lucide-react';
import { useAppContext } from '../../context/useAppContext';
import './ApprovalQueue.css';

const ApprovalQueue = () => {
  const { approvals, setApprovals } = useAppContext();
  const [actioned, setActioned] = useState([]);

  const handleAction = (id, type) => {
    setActioned(prev => [...prev, { id, type }]);
    setTimeout(() => {
      // Use functional updater to avoid stale closure
      setApprovals(prev => prev.filter(a => a.id !== id));
    }, 500);
  };

  const getPlatformClass = (platform) => {
    switch(platform) {
      case 'Google': return 'bg-google';
      case 'Trustpilot': return 'bg-trustpilot';
      case 'Facebook': return 'bg-facebook';
      default: return '';
    }
  };

  return (
    <div className="approval-queue animate-fade-in">
      <header className="page-header">
        <div>
          <h1>Approval Queue</h1>
          <p>Review and approve AI-generated responses before they are posted.</p>
        </div>
        <div className="queue-stats">
          <span className="badge badge-negative" role="status" aria-live="polite">
            {approvals.length} Pending
          </span>
        </div>
      </header>

      {approvals.length === 0 ? (
        <div className="empty-state glass-panel" role="status">
          <Check size={48} style={{ color: 'var(--status-positive)', marginBottom: '1rem' }} aria-hidden="true" />
          <h2>All caught up!</h2>
          <p>There are no pending responses in the queue.</p>
        </div>
      ) : (
        <div className="queue-list" role="list" aria-label="Pending review responses">
          {approvals.map(item => (
            <article
              key={item.id}
              role="listitem"
              className={`approval-card glass-panel ${actioned.find(a => a.id === item.id) ? 'actioned slide-out' : ''}`}
              aria-label={`Review from ${item.customerName} on ${item.platform}`}
            >
              <div className="card-header">
                <div className="customer-info">
                  <div className={`platform-icon ${getPlatformClass(item.platform)}`} aria-hidden="true">
                    {item.platform[0]}
                  </div>
                  <div>
                    <h3 className="customer-name">{item.customerName}</h3>
                    <span className="time">{item.timeAgo} on {item.platform}</span>
                  </div>
                </div>
                <div className="rating-sentiment">
                  <div className="stars" aria-label={`${item.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < item.rating ? "#f59e0b" : "transparent"} 
                        color={i < item.rating ? "#f59e0b" : "var(--text-muted)"} 
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className={`badge badge-${item.sentiment}`}>
                    {item.sentiment === 'positive' && '😊 '}
                    {item.sentiment === 'negative' && '😟 '}
                    {item.sentiment === 'neutral' && '😐 '}
                    {item.sentiment}
                  </span>
                </div>
              </div>

              <div className="review-content">
                <div className="original-review">
                  <h4 className="section-label">Customer Review:</h4>
                  <blockquote>
                    <p>{item.originalReview}</p>
                  </blockquote>
                </div>
                <div className="ai-draft">
                  <h4 className="section-label">
                    AI Generated Response:
                    <span className="badge badge-ai">Claude 3.5 Sonnet</span>
                  </h4>
                  <div className="draft-box">
                    <p>{item.aiResponse}</p>
                  </div>
                </div>
              </div>

              <div className="card-actions">
                <button
                  className="btn btn-secondary"
                  onClick={() => handleAction(item.id, 'edit')}
                  aria-label={`Edit response for ${item.customerName}`}
                >
                  <Edit2 size={16} aria-hidden="true" /> Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleAction(item.id, 'reject')}
                  aria-label={`Reject response for ${item.customerName}`}
                >
                  <X size={16} aria-hidden="true" /> Reject
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleAction(item.id, 'approve')}
                  aria-label={`Approve and post response for ${item.customerName}`}
                >
                  <Check size={16} aria-hidden="true" /> Approve & Post
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApprovalQueue;
