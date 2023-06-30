import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { AiOutlineHome } from 'react-icons/ai';
import './SideBar.css';

export default function SideBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);

  }

  return (
    <>
        <section className="sidebar">
            <Link to="/" className="sidebar-home">
                <span className="sidebar-legends-lounge">LEGENDS LOUNGE</span>
            </Link>
            <ul className="side-menu top">
                <li>
                    <Link to="/" className="sidebar-home">
                        <AiOutlineHome />
                        <span className="sidebar-text">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/top" className="sidebar-top-lane">
                        <img src="https://cdn.mobalytics.gg/assets/common/icons/lol-roles/16-top-bright.svg" alt="Top" loading="lazy" className="top-lane-icon"></img>
                        <span className="sidebar-text">Top Lane</span>
                    </Link>
                </li>
                <li>
                    <Link to="/jungle" className="sidebar-jungle">
                        <img src="https://cdn.mobalytics.gg/assets/common/icons/lol-roles/16-jg-bright.svg" alt="Jungle" loading="lazy" className="jungle-icon"></img>
                        <span className="sidebar-text">Jungle</span>
                    </Link>
                </li>
                <li>
                    <Link to="/mid" className="sidebar-mid-lane">
                        <img src="https://cdn.mobalytics.gg/assets/common/icons/lol-roles/16-mid-bright.svg" alt="Mid" loading="lazy" className="mid-lane-icon"></img>
                        <span className="sidebar-text">Mid Lane</span>
                    </Link>
                </li>
                <li>
                    <Link to="/adc" className="sidebar-adc">
                        <img src="https://cdn.mobalytics.gg/assets/common/icons/lol-roles/16-bot-bright.svg" alt="Bot" loading="lazy" className="adc-icon"></img>
                        <span className="sidebar-text">ADC</span>
                    </Link>
                </li>
                <li>
                    <Link to="/support" className="sidebar-support">
                        <img src="https://cdn.mobalytics.gg/assets/common/icons/lol-roles/16-sup-bright.svg" alt="Support" loading="lazy" className="support-icon"></img>
                        <span className="sidebar-text">Support</span>
                    </Link>
                </li>
            </ul>
        </section>
    </>
    
  );
}

