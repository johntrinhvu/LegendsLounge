import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from '../../components/LogInForm/LogInForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [activeTab, setActiveTab] = useState('login');

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <main>
      <div className="signup-rectangle">
        <div className="container">
          <div className="tabs" role="tablist">
            <span 
              className={`tab-login ${activeTab === 'login' ? 'active' : ''}`} 
              role="tab" 
              onClick={() => handleTabClick('login')}
            >
              <p className="hyper-link">Log in</p>
            </span>
            <span 
              className={`tab-signup ${activeTab === 'signup' ? 'active' : ''}`}
              role="tab" 
              onClick={() => handleTabClick('signup')}
            >
              <p className="hyper-link">Sign up</p>  
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
  );
}