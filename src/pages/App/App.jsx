import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewPostPage from '../NewPostPage/NewPostPage';
import TopPage from '../TopPage/TopPage';
import JunglePage from '../JunglePage/JunglePage';
import MidPage from '../MidPage/MidPage';
import ADCPage from '../ADCPage/ADCPage';
import SupportPage from '../SupportPage/SupportPage';
import HomePage from '../HomePage/HomePage';
import WelcomePage from '../WelcomePage/WelcomePage';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import './App.css';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ? (
          <>
          <div className="app-container">
            <SideBar user={user} setUser={setUser} />
            <div className="main-content">
              <NavBar user={user} setUser={setUser} />
              <div className="centered-content">
                <Routes>
                  {/* Route components in here */}
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/posts/new" element={<NewPostPage user={user} setUser={setUser} />} />
                  <Route path="/top" element={<TopPage />} />
                  <Route path="/jungle" element={<JunglePage />}></Route>
                  <Route path="/mid" element={<MidPage />}></Route>
                  <Route path="/adc" element={<ADCPage />}></Route>
                  <Route path="/support" element={<SupportPage />}></Route>
                </Routes>
              </div>
            </div>
          </div>
          </>
      ) : (
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/credentials" element={<AuthPage setUser={setUser} />} />
        </Routes>
      )}
    </main>
  );
}
