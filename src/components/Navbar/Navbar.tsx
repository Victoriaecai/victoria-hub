// components/Navbar.tsx
import './Navbar.css';
import logoBIG from '../../assets/images/logoBIG.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navigation">
  <Link className="logo" to="/">
    <img src={logoBIG} alt="Victoria Cat Logo" />
  </Link>
  <div className="nav-center">
    <nav>
      <Link to="/about">ABOUT ME</Link>
      <Link to="/projects">PROJECTS</Link>
      <Link to="/gallery">ART GALLERY</Link>
    </nav>
  </div>
</div>
  );
}

export default Navbar;