import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  // <Link to="/post/new">New Post</Link>
  return (
    <section className="navbar-content">
      <nav className="navbar">
        <div className="nav-search-div">
          <form>
            <input type="search" placeholder="Search LegendsLounge" className="nav-search-input" />
            <button type="submit" className="nav-search-btn">{<AiOutlineSearch />}</button>
          </form>
        </div>
        <span className="user-profile-name">
          <span className="user-icon"><AiOutlineUser /></span>
          {user.name}
        </span>
      </nav>
    </section>
  );
}