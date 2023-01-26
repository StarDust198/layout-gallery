import cn from 'classnames';
import styles from './Gallery.module.scss';

// interface GalleryProps {}

export const Gallery = () => (
  <div className={styles.gallery}>
    <a
      href="./pages/Portrait/index.html"
      className={cn(styles.thumb, styles.light)}
    >
      <img src="../../assets/portrait.jpg" alt="Portrait presents" />
    </a>
    <a
      href="./pages/Glazing/index.html"
      className={cn(styles.thumb, styles.light)}
    >
      <img src="./assets/glazing.jpg" alt="Irvas Windows" />
    </a>
    <a
      href="./pages/Portfolio/index.html"
      className={cn(styles.thumb, styles.light)}
    >
      <img src="./assets/portfolio.jpg" alt="WebDev Portfolio" />
    </a>
    <a href="./pages/UBER/index.html" className={styles.thumb}>
      <img src="./assets/uber.jpg" alt="Uber" />
    </a>
    <a href="./pages/Pulsemeters/index.html" className={styles.thumb}>
      <img src="./assets/pulsemeters.jpg" alt="RunSmart" />
    </a>
  </div>
);
