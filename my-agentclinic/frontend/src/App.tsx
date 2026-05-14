import { MainLayout } from "./components/layout/MainLayout";
import "./styles/glass-components.css";

export default function App() {
  return (
    <MainLayout>
      <div className="glass-hero">
        <h1>Welcome to AgentClinic</h1>
        <p>
          Your AI-powered therapy booking platform. Connect with intelligent agents
          designed to support your mental wellness journey through personalized
          conversations and therapeutic sessions.
        </p>
      </div>

      <div className="glass-card-grid">
        <div className="glass-card">
          <div className="glass-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h3>AI Agents</h3>
          <p>Specialized therapeutic agents ready to support your mental wellness.</p>
        </div>

        <div className="glass-card">
          <div className="glass-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <h3>Book Sessions</h3>
          <p>Schedule therapy sessions at times that work best for you.</p>
        </div>

        <div className="glass-card">
          <div className="glass-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <h3>Track Progress</h3>
          <p>Monitor your wellness journey with insights and progress tracking.</p>
        </div>
      </div>

      <div className="glass-cta">
        <button className="glass-btn glass-btn-primary">Get Started</button>
        <button className="glass-btn glass-btn-secondary">Learn More</button>
      </div>
    </MainLayout>
  );
}
