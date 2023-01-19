import cn from 'classnames';
import styles from './Gallery.module.scss';

// interface GalleryProps {}

export const Gallery = () => (
  <div className={styles.gallery}>
    <a
      href="https://stardust198.github.io/Portrait/index.html"
      className={cn(styles.thumb, styles.light)}
    >
      <img src="../../assets/portrait.jpg" alt="Portrait presents" />
    </a>
    <a
      href="https://stardust198.github.io/Glazing/index.html"
      className={cn(styles.thumb, styles.light)}
    >
      <img src="./assets/glazing.jpg" alt="Irvas Windows" />
    </a>
    <a
      href="https://stardust198.github.io/Portfolio/index.html"
      className={cn(styles.thumb, styles.light)}
    >
      <img src="./assets/portfolio.jpg" alt="WebDev Portfolio" />
    </a>
    <a
      href="https://stardust198.github.io/UBER/index.html"
      className={styles.thumb}
    >
      <img src="./assets/uber.jpg" alt="Uber" />
    </a>
    <a
      href="https://stardust198.github.io/Pulsemeters/index.html"
      className={styles.thumb}
    >
      <img src="./assets/pulsemeters.jpg" alt="RunSmart" />
    </a>
  </div>
);
