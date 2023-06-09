import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styles from './SearchHeader.module.scss';

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    text && navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword ? keyword : '');
  }, [keyword]);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__title}>
        <button onClick={() => setText('')}>
          <BsYoutube className={styles.logo} />
          <h1>YouTube</h1>
        </button>
      </Link>

      <form className={styles.header__search} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="검색"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">
          <BsSearch className={styles.icon} />
        </button>
      </form>
    </header>
  );
}
