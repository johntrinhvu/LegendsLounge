import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from '../../components/LogInForm/LogInForm';
import AuthVideo from '../../components/AuthVideo/AuthVideo';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [activeTab, setActiveTab] = useState('login');

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <>
    <AuthVideo />
      <main className="auth-page-main">
        <h1 className="legends-lounge-h1">LEGENDS LOUNGE</h1>
        <div className="signup-rectangle">
          <div className="auth-page-container">
            <div className="auth-tabs" role="tablist">
              <span 
                className={`tab-login ${activeTab === 'login' ? 'active' : ''}`} 
                role="tab" 
                onClick={() => handleTabClick('login')}
              >
                <p className="auth-hyper-link">Log in</p>
              </span>
              <span 
                className={`tab-signup ${activeTab === 'signup' ? 'active' : ''}`}
                role="tab" 
                onClick={() => handleTabClick('signup')}
              >
                <p className="auth-hyper-link">Sign up</p>  
              </span>
            </div>
            
            { activeTab === 'signup' ?
                <SignUpForm setUser={setUser} />
                :
                <LogInForm setUser={setUser} />
            }
          </div>
        </div>
      </main>
    </>
  );
}