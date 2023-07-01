import { Link } from 'react-router-dom';

export default function WelcomePage() {
    return (
        <>
            <h1 className="welcome">Hi, welcome</h1>
            <div className="MainPage">
                <h1>Welcome to My App!</h1>
                <p>
                  Click <Link to="/credentials">here</Link> to sign up.
                </p>
            </div>
        </>
    );
}