import styles from './Popover.module.css';

const Popover = () => {
  return (
    <>
      <div className={styles.arrowUp}></div>
      <div className={styles.arrowDown}></div>
      <div className={styles.arrowLeft}></div>
      <div className={styles.arrowRight}></div>
    </>
  );
};
export default Popover;
