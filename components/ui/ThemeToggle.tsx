import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import styles from './ThemeToggle.module.scss';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.themeToggle} ${styles[theme]}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={styles.iconContainer}>
        <div className={styles.sunIcon}>
          <span role="img" aria-label="sun">☀️</span>
        </div>
        <div className={styles.moonIcon}>
          <span role="img" aria-label="moon">🌙</span>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle; 