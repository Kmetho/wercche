import styles from "./BlenderRender.module.css";
import Image from "next/image";

export default function BlenderRender() {
  return (
    <div className={styles.scrollable}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>3D illustrations</h2>
        <h2 className={styles.heading}>motion graphics</h2>
      </div>
      <div className={styles.kafelki}>
        <Image
          className={styles.pic}
          src="/3D illustrations/portrait3.png"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="/3D illustrations/portrait4.png"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="/3D illustrations/portrait5.png"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="/3D illustrations/GEO3.png"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="/3D illustrations/GEO5.png"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="/3D illustrations/GEO9.png"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="/3D illustrations/motylek12.png"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="/3D illustrations/crystals1.png"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="/3D illustrations/crystals2.png"
          width="500"
          height="500"
          alt=""
        />
      </div>
    </div>
  );
}
