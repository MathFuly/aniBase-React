import { Link } from "react-router-dom";

import { GiFluffyTrefoil } from "react-icons/gi";
import { RiHomeFill } from "react-icons/ri";
import { IoMdListBox } from "react-icons/io";
import { FaLeaf } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";

import styles from "./Navbar.module.css";

import Searchnav from "./Searchnav";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <GiFluffyTrefoil />
        <span>
          ani<span>BASE</span>
        </span>
      </Link>
      <div className={styles.links}>
        <Link>
          <div className={styles.overflowc}>
            <RiHomeFill /> <span>Home</span>
          </div>
        </Link>
        <Link to="/genres">
          <div className={styles.overflowc}>
            <IoMdListBox /> <span>genres</span>
          </div>
        </Link>
        <Link>
          <div className={styles.overflowc}>
            <FaLeaf /> <span>seasons</span>
          </div>
        </Link>
        <Link>
          <div className={styles.overflowc}>
            <AiFillInfoCircle /> <span>sobre</span>
          </div>
        </Link>
      </div>
      <div>
        <Searchnav />
      </div>
    </div>
  );
};

export default Navbar;
