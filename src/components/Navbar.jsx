import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import { GiFluffyTrefoil } from "react-icons/gi";
import { RiHomeFill } from "react-icons/ri";
import { IoMdListBox } from "react-icons/io";
import { FaLeaf } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "./Navbar.module.css";

import Searchnav from "./Searchnav";

const Navbar = () => {
  const [view, setView] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.principal}>
        <Link onClick={() => setView(false)} to="/" className={styles.logo}>
          <GiFluffyTrefoil />
          <span>
            ani<span>BASE</span>
          </span>
        </Link>
        <p onClick={() => setView(!view)} className={styles.hamburguer}>
          <GiHamburgerMenu />
        </p>
      </div>

      {view === true && (
        <div className={styles.secondary}>
          <div className={styles.search}>
            <Searchnav />
          </div>
          <div className={styles.links}>
            <NavLink
              onClick={() => setView(false)}
              to="/"
            >
              <div className={styles.overflowc}>
                <RiHomeFill /> <span>Home</span>
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.noactive)}
              onClick={() => setView(false)}
              to="/genres"
            >
              <div className={styles.overflowc}>
                <IoMdListBox /> <span>genres</span>
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.noactive)}
              onClick={() => setView(false)}
              to="/seasons"
            >
              <div className={styles.overflowc}>
                <FaLeaf /> <span>seasons</span>
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
