import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as userService from '../../utilities/users-service';
import { AiOutlineHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import './SideBar.css';

export default function SideBar({ user, setUser }) {
    const [activeMenu, setActiveMenu] = useState('home');

    function handleLogOut() {
        userService.logOut();
        setUser(null);

    }

    const getSidebarClassName = (menu) => {
        return activeMenu === menu ? 'active' : '';
    };

    const handleSidebarClick = (menu) => {
        setActiveMenu(menu);
    }

  return (
    <>
        <section className="sidebar">
            <Link to="/home" className="brand">
                <span className="sidebar-legends-lounge">LEGENDS LOUNGE</span>
            </Link>
            <ul className="side-menu top">
                <li className={getSidebarClassName('home')}>
                    <Link to="/home" className="sidebar-home" onClick={() => handleSidebarClick('home')}>
                        <AiOutlineHome className="home-icon"/>
                        <span className="sidebar-text">Home</span>
                    </Link>
                </li>
                <li className={getSidebarClassName('top')}>
                    <Link to="/top" className="sidebar-top-lane" onClick={() => handleSidebarClick('top')}>
                        <img src="https://cdn.mobalytics.gg/assets/common/icons/lol-roles/16-top-bright.svg" alt="Top" loading="lazy" className="top-lane-icon"></img>
                        <span className="sidebar-text">Top Lane</span>
                    </Link>
                </li>
                <li className={getSidebarClassName('jungle')}>
                    <Link to="/jungle" className="sidebar-jungle" onClick={() => handleSidebarClick('jungle')}>
                        <img src="https://cdn.mobalytics.gg/assets/common/icons/lol-roles/16-jg-bright.svg" alt="Jungle" loading="lazy" className="jungle-icon"></img>
                        <span className="sidebar-text">Jungle</span>
                    </Link>
                </li>
                <li className={getSidebarClassName('mid')}>
                    <Link to="/mid" className="sidebar-mid-lane" onClick={() => handleSidebarClick('mid')}>
                        <img src="https://cdn.mobalytics.gg/assets/common/icons/lol-roles/16-mid-bright.svg" alt="Mid" loading="lazy" className="mid-lane-icon"></img>
                        <span className="sidebar-text">Mid Lane</span>
                    </Link>
                </li>
                <li className={getSidebarClassName('adc')}>
                    <Link to="/adc" className="sidebar-adc" onClick={() => handleSidebarClick('adc')}>
                        <img src="https://cdn.mobalytics.gg/assets/common/icons/lol-roles/16-bot-bright.svg" alt="Bot" loading="lazy" className="adc-icon"></img>
                        <span className="sidebar-text">ADC</span>
                    </Link>
                </li>
                <li className={getSidebarClassName('support')}>
                    <Link to="/support" className="sidebar-support" onClick={() => handleSidebarClick('support')}>
                        <img src="https://cdn.mobalytics.gg/assets/common/icons/lol-roles/16-sup-bright.svg" alt="Support" loading="lazy" className="support-icon"></img>
                        <span className="sidebar-text">Support</span>
                    </Link>
                </li>
            </ul>
            <ul className="side-menu">
                <li>
                    <Link to="" onClick={handleLogOut} className="logout-link">
                        <BiLogOut className="logout-icon" />
                        <span className="sidebar-text">Log out</span>
                    </Link>
                </li>
            </ul>
        </section>
    </>
    
  );
}