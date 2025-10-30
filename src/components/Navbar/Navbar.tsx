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
      <a href="#about">ABOUT ME</a>
      <a href="#projects">PROJECTS</a>
      <a href="#gallery">ART GALLERY</a>
      <a href="#contact">CONTACT ME</a>
    </nav>
  </div>
</div>
  );
}

export default Navbar;