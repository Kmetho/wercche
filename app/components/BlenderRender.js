import styles from "./BlenderRender.module.css";

export default function BlenderRender() {
  return (
    <div className={styles.scrollable}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>3D illustrations</h2>
        <h2 className={styles.heading}>motion graphics</h2>
      </div>
      <div className={styles.motion}></div>
      <div className={styles.balls}></div>
      <div className={styles.portraits}></div>
      <div className={styles.butterflies}></div>
    </div>
  );
}
