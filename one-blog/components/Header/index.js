import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span className={styles.spanColor}>BLOG</span>
      </Link>
      <nav>
        <Link href="https://github.com/burakcihan61" target="_blank">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
