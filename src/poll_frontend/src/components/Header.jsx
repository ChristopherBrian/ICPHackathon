import React from "react"
import styles from "../styles/Header.module.scss"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.name}>Slido Clone</span>
      </div>
      <nav>
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#pricing">Pricing</a>
      </nav>
    </header>
  );
}

export default Header;