import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getCurrency } from '../../redux/currencies/currencies';
import menuList from './menuList';
import getRestructuredObject from '../../common/dataLogic';
// import SuccessButton from '../button/button';
import './navBar.scss';

const NavBar = () => {
  // const [clicked, setClicked] = useState(false);
  // const list = menuList.map(({ url, title, id }) => (
  //   <li className="link-container" key={id}>
  //     <NavLink exact to={url} className="link" activeClassName="active">{title}</NavLink>
  //   </li>
  // ));

  // const [location, setLocation] = useState('/');
  // const handleLocation = (value) => {
  //   setLocation(handleLocation);
  // };
  const { currency } = useSelector((state) => state);
  // const data = getRestructuredObject();
  // console.log(data)
  return (
    <>
      {currency && (
        <nav>
          <div className="logo-container">
            <div className="logo">GC</div>
            <div id="font">xchange</div>
          </div>
          {/* <NavLink to={`/${location}`} component={Details}> */}
          {/* <SuccessButton /> */}
          {/* </NavLink> */}
          {/* <div className="hamburger" onClick={() => setClicked(!clicked)} aria-hidden="true">
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={clicked ? 'menu-list' : 'menu-list close'}>{list}</ul> */}
        </nav>
      )}
    </>
  );
};

export default NavBar;
