import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewPostPage from '../NewPostPage/NewPostPage';
import TopPage from '../TopPage/TopPage';
import JunglePage from '../JunglePage/JunglePage';
import MidPage from '../MidPage/MidPage';
import ADCPage from '../ADCPage/ADCPage';
import SupportPage from '../SupportPage/SupportPage';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import './App.css';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ? (
          <>
            <SideBar />
            {/* <NavBar /> */}
            <Routes>
              {/* Route components in here */}
              <Route path="/post/new" element={<NewPostPage />} />
              <Route path="/top" element={<TopPage />} />
              <Route path="/jungle" element={<JunglePage />}></Route>
              <Route path="/mid" element={<MidPage />}></Route>
              <Route path="/adc" element={<ADCPage />}></Route>
              <Route path="/support" element={<SupportPage />}></Route>
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
