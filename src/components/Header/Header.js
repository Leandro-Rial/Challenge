import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo">Landify</div>
          
          <div className="menu" onClick={() => setMenu(!menu)}>
            <i className="fas fa-bars"></i>
          </div>

          <ul style={styleMenu}>
            <li onClick={() => setMenu(!menu)}>
              <Link to="#">How it works</Link>
            </li>
            <li onClick={() => setMenu(!menu)}>
              <Link to="#">About us</Link>
            </li>
            <li onClick={() => setMenu(!menu)}>
              <Link to="#">Partners</Link>
            </li>
            <li onClick={() => setMenu(!menu)}>
              <Link to="#">How it works</Link>
            </li>
            <li onClick={() => setMenu(!menu)}>
              <Link to="#" className="btn">
                Buy now
              </Link>
            </li>

            <li className="cruz" onClick={() => setMenu(!menu)}>
              <i className="fas fa-times"></i>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
