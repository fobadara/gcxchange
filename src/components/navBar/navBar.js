import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './navBar.scss';
import less from '../../images/less-than.png';

const NavBar = () => {
  const { currency } = useSelector((state) => state);
  return (
    <>
      {currency && (
        <nav>
          <div className="logo-container">
            <Link to="/">
              <img src={less} alt="back-icon" height="50" />
            </Link>
            <div className="logo">GC</div>
            <div id="font">xchange</div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
