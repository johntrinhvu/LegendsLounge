import { Link } from 'react-router-dom';
import WelcomeVideo from '../../components/WelcomeVideo/WelcomeVideo';
import './WelcomePage.css';

export default function WelcomePage() {
    return (
        <>
            <WelcomeVideo />
                <main className="welcome-page-main">
                    <h1 className="legends-lounge-welcome">LEGENDS LOUNGE</h1>
                    <h4 className="continue-header">To continue, click the button to sign up</h4>
                    <p className="continue-paragraph">or, log in if you already have an account.</p>
                    <br />
                    <div className="login-welcome-page">
                        <Link to="/credentials">
                            <button type="button" className="login-signup-welcome-button">LOG IN / SIGN UP</button>
                        </Link>
                    </div>
                </main>
        </>
    );
}