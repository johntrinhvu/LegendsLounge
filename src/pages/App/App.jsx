import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>
          </>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <div className="MainPage">
                <h1>Welcome to My App!</h1>
                <p>
                  Click <Link to="/credentials">here</Link> to sign up.
                </p>
              </div>
            }
          />
          <Route path="/credentials" element={<AuthPage setUser={setUser} />} />
        </Routes>
      )}
    </main>
  );
}
