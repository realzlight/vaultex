import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = document.cookie.includes('token');
    navigate(token ? '/dashboard' : '/login');
  };

  return (
    <div className="home">
      <div className="glow" />
      <div className="content">
        <p className="eyebrow">vaultex</p>
        <h1 className="headline">your identity,<br />secured quietly</h1>
        <p className="sub">auth that stays out of the way</p>
        <button className="btn" onClick={handleGetStarted}>
          get started
        </button>
      </div>
    </div>
  );
}
