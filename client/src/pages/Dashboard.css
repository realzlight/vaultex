import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { LogOut, User, Shield, Activity, Key } from 'lucide-react'
import './Dashboard.css'

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/auth/verify', { withCredentials: true })
      .catch(() => navigate('/login'));
  }, []);

  const handleLogout = async () => {
    await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
    navigate('/login');
  };

  return (
    <div className="dash-wrapper">

      {/* Navbar */}
      <nav className="dash-nav">
        <p className="dash-logo">vaultex</p>
        <div className="dash-nav-right">
          <span className="dash-nav-user">
            <User size={13} /> account
          </span>
          <button className="dash-logout" onClick={handleLogout}>
            <LogOut size={13} /> logout
          </button>
        </div>
      </nav>

      {/* Main */}
      <main className="dash-main">

        <div className="dash-header">
          <p className="dash-eyebrow">dashboard</p>
          <h1 className="dash-title">welcome back</h1>
          <p className="dash-sub">here's what's happening with your account</p>
        </div>

        {/* Cards */}
        <div className="dash-grid">

          <div className="dash-card">
            <div className="dash-card-top">
              <Shield size={14} color="#555" />
              <span>auth status</span>
            </div>
            <p className="dash-card-value">active</p>
            <p className="dash-card-desc">token valid for 7 days</p>
          </div>

          <div className="dash-card">
            <div className="dash-card-top">
              <Activity size={14} color="#555" />
              <span>last login</span>
            </div>
            <p className="dash-card-value">just now</p>
            <p className="dash-card-desc">from this device</p>
          </div>

          <div className="dash-card">
            <div className="dash-card-top">
              <Key size={14} color="#555" />
              <span>session</span>
            </div>
            <p className="dash-card-value">httponly</p>
            <p className="dash-card-desc">cookie secured</p>
          </div>

        </div>

      </main>

    </div>
  )
}