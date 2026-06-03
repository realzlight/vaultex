import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-box">

        <div className="logo">⚫</div>
        <h1>Log in</h1>

        <button className="oauth-btn">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
          Continue with Google
        </button>

        <button className="oauth-btn">
          <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" style={{filter:'invert(1)'}} />
          Continue with GitHub
        </button>

        <button className="oauth-btn">
          <img src="https://www.svgrepo.com/show/452222/apple.svg" alt="Apple" style={{filter:'invert(1)'}} />
          Continue with Apple
        </button>

        <div className="divider"><span>OR</span></div>

        <label>Email</label>
        <input type="email" placeholder="Email" />

        <button className="continue-btn">Continue</button>

        <p className="footer-text">
          Don't have an account? <Link to="/signin">Create your account</Link>
        </p>
  <div className="divider"></div>
        <p className="sso-text">
          🔒 SSO available on <a href="#">Business and Enterprise</a> plans
        </p>

      </div>
    </div>
  )
}

export default Login