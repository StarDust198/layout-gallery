import { ThemeSwitcher } from 'components/ThemeSwitcher';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => (
  <div className={styles.header}>
    <div className={styles.logo}>layout gallery</div>
    <ThemeSwitcher />
  </div>
);
