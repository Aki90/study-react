import React from 'react';
import styles from './SearchHeader.module.scss';
import { Link } from 'react-router-dom';
import { BsSearch, BsYoutube } from 'react-icons/bs';

export default function SearchHeader() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__title}>
        <BsYoutube className={styles.logo} />
        <h1>YouTube</h1>
      </Link>

      <form className={styles.header__search}>
        <input type="text" placeholder="검색" />
        <button type="submit">
          <BsSearch className={styles.icon} />
        </button>
      </form>
    </header>
  );
}
