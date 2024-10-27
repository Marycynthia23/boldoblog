import React from 'react'
import styles from "./Footer.module.css"
import logo from "../../images/Logo.png"

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
       
        <div className={styles.FooterDiv}>
            <div className={styles.CompanyDetails}>
            <img src={logo} alt="logo" className={styles.Logo}/>
                <p className={styles.About}>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                <p className={styles.Rights}>All rights reserved.</p>
            </div>
            <div className={styles.ContactDetails}>
                <p className={styles.BoldText}>Landings</p>
                <li><a href="***" className={styles.Link}>Home</a></li>
                <li><a href="***"className={styles.Link}>Product</a></li>
                <li><a href="***"className={styles.Link}>Services</a></li>

            </div>
            <div className={styles.ContactDetails}>
                <p className={styles.BoldText}>Company</p>
                <li><a href="***" className={styles.Link}>Home</a></li>
                <li><a href="***" className={styles.Link}>Careers &nbsp;&nbsp;<span className={styles.span}>Hiring!</span></a></li>
                <li><a href="***" className={styles.Link}>Services</a></li>
            </div>
            <div className={styles.ContactDetails}>
                <p className={styles.BoldText}>Resources</p>
                <li><a href="***" className={styles.Link}>Blog</a></li>
                <li><a href="***" className={styles.Link}>Product</a></li>
                <li><a href="***" className={styles.Link}>Services</a></li>
            </div>
        </div>
    </div>
  )
}

export default Footer