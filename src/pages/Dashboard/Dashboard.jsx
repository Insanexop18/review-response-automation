import { BarChart3, TrendingUp, MessageSquare, Star } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard animate-fade-in">
      <header className="page-header">
        <div>
          <h1>Dashboard Overview</h1>
          <p>AI response analytics across all connected platforms.</p>
        </div>
        <button className="btn btn-primary">
          <BarChart3 size={18} />
          Generate Report
        </button>
      </header>

      <div className="stats-grid">
        <div className="stat-card glass-panel">
          <div className="stat-icon" style={{background: 'rgba(139, 92, 246, 0.2)', color: 'var(--accent-primary)'}}>
            <MessageSquare size={24} />
          </div>
          <div className="stat-content">
            <h3>Total Reviews</h3>
            <div className="stat-value">1,248</div>
            <div className="stat-change positive">
              <TrendingUp size={14} /> +12% this month
            </div>
          </div>
        </div>
        
        <div className="stat-card glass-panel">
          <div className="stat-icon" style={{background: 'rgba(16, 185, 129, 0.2)', color: 'var(--status-positive)'}}>
            <Star size={24} />
          </div>
          <div className="stat-content">
            <h3>Average Rating</h3>
            <div className="stat-value">4.8</div>
            <div className="stat-change positive">
              <TrendingUp size={14} /> +0.2 this month
            </div>
          </div>
        </div>

        <div className="stat-card glass-panel">
          <div className="stat-icon" style={{background: 'rgba(236, 72, 153, 0.2)', color: 'var(--accent-secondary)'}}>
            <BarChart3 size={24} />
          </div>
          <div className="stat-content">
            <h3>AI Automation Rate</h3>
            <div className="stat-value">94%</div>
            <div className="stat-change neutral">
              Stable
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="chart-section glass-panel">
          <h2>Sentiment Trends</h2>
          <div className="mock-chart">
            {/* Simple mock chart visualization */}
            <div className="bar-group">
              <div className="bar positive" style={{height: '80%'}}></div>
              <div className="bar neutral" style={{height: '30%'}}></div>
              <div className="bar negative" style={{height: '10%'}}></div>
              <span>Mon</span>
            </div>
            <div className="bar-group">
              <div className="bar positive" style={{height: '70%'}}></div>
              <div className="bar neutral" style={{height: '40%'}}></div>
              <div className="bar negative" style={{height: '15%'}}></div>
              <span>Tue</span>
            </div>
            <div className="bar-group">
              <div className="bar positive" style={{height: '90%'}}></div>
              <div className="bar neutral" style={{height: '20%'}}></div>
              <div className="bar negative" style={{height: '5%'}}></div>
              <span>Wed</span>
            </div>
            <div className="bar-group">
              <div className="bar positive" style={{height: '85%'}}></div>
              <div className="bar neutral" style={{height: '25%'}}></div>
              <div className="bar negative" style={{height: '10%'}}></div>
              <span>Thu</span>
            </div>
            <div className="bar-group">
              <div className="bar positive" style={{height: '95%'}}></div>
              <div className="bar neutral" style={{height: '15%'}}></div>
              <div className="bar negative" style={{height: '5%'}}></div>
              <span>Fri</span>
            </div>
          </div>
          <div className="chart-legend">
            <span className="legend-item"><span className="dot positive"></span> Positive</span>
            <span className="legend-item"><span className="dot neutral"></span> Neutral</span>
            <span className="legend-item"><span className="dot negative"></span> Negative</span>
          </div>
        </div>

        <div className="recent-activity glass-panel">
          <h2>Recent Automation</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-avatar bg-google">G</div>
              <div className="activity-details">
                <p><strong>Auto-replied</strong> to a 5-star review from <em>Sarah J.</em></p>
                <span className="time">2 mins ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-avatar bg-trustpilot">T</div>
              <div className="activity-details">
                <p><strong>Drafted response</strong> for a 3-star review from <em>Mark T.</em></p>
                <span className="time">15 mins ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-avatar bg-facebook">F</div>
              <div className="activity-details">
                <p><strong>Escalated</strong> a 1-star review from <em>Emily R.</em></p>
                <span className="time">1 hour ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
