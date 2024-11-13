import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Nav.css';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: 'Home', target: 'home' },
    { id: 2, link: 'About', target: 'about' },
    { id: 3, link: 'Projects', target: 'projects' },
    { id: 4, link: 'Skills', target: 'skills' },
    { id: 5, link: 'Contact', target: 'contact' },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Portfolio</h1>
      </div>

      <ul className="nav-menu" >
        {links.map(({ id, link }) => (
          <li key={id} className="nav-item">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hamburger" onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="mobile-menu">
          {links.map(({ id, link }) => (
            <li key={id} className="mobile-item">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;