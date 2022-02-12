import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menuList from './menuList';
import './navBar.scss';

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const list = menuList.map(({ url, title, id }) => (
    <li className="link-container" key={id}>
      <NavLink exact to={url} className="link" activeClassName="active">{title}</NavLink>
    </li>
  ));
  return (
    <nav>
      <div className="logo-container">
        <div className="logo">GC</div>
        <div id="font">xchange</div>
      </div>
      <div className="hamburger" onClick={() => setClicked(!clicked)} aria-hidden="true">
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={clicked ? 'menu-list' : 'menu-list close'}>{list}</ul>
    </nav>
  );
};

export default NavBar;
