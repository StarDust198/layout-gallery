import styles from './Gallery.module.scss';

interface GalleryProps {}

export const Gallery = ({}: GalleryProps) => (
  <div className={styles.gallery}>Gallery Component</div>
);
