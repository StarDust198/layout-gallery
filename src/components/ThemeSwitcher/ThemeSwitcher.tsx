import { useEffect, useState } from 'react';

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';

import styles from './ThemeSwitcher.module.scss';

// interface ThemeSwitcherProps {}

export const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);
  const themeText = darkMode ? 'Dark' : 'Light';
  const ThemeIcon = darkMode ? MoonIcon : SunIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div
      className={styles.switcher}
      onClick={() => setDarkMode((dark) => !dark)}
    >
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
