import React, { useState } from 'react';
import styles from "./Header.module.css";
import logo from "../../images/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.HeaderContainer}>
      <div>
        <img src={logo} alt="logo" className={styles.Logo} />
      </div>
      
      <div className={styles.Hamburger} onClick={toggleMenu}>
        <div className={isOpen ? styles.BarOpen : styles.Bar}></div>
        <div className={isOpen ? styles.BarOpen : styles.Bar}></div>
        <div className={isOpen ? styles.BarOpen : styles.Bar}></div>
      </div>

      <div className={`${styles.NavLinks} ${isOpen ? styles.NavLinksOpen : ''}`}>
        <li className={styles.NavList}><a href="***" className={styles.NavItem}>Product</a></li>
        <li className={styles.NavList}><a href="***" className={styles.NavItem}>Services</a></li>
        <li className={styles.NavList}><a href="***" className={styles.NavItem}>About</a></li>
        <li className={styles.NavList}><a href="***" className={styles.NavItemBtn}>Login</a></li>
      </div>
    </div>
  );
};

export default Header;
