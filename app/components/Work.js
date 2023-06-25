import styles from "./Work.module.css";
import Image from "next/image";

export default function Work() {
  return (
    <div className={styles.scrollable}>
      <h2 className={styles.heading}>websites</h2>
      <div className={styles.kafelki}>
        <div className={styles.flowerFinder}>
          <Image
            className={styles.pic}
            src="/websites/flower-finder.png"
            width="600"
            height="500"
            alt=""
          />
          <p>
            Next.js app, click a button to display places with flowers near you.
          </p>
        </div>
        <div className={styles.notes}>
          <Image
            className={styles.pic}
            src="/websites/notess.png"
            width="600"
            height="500"
            alt=""
          />
          <p>
            Next.js app, click a button to display places with flowers near you.
          </p>
        </div>
        <div className={styles.crystals}>
          <Image
            className={styles.pic}
            src="/websites/crystals-mockup.png"
            width="600"
            height="500"
            alt=""
          />
          <p>
            Next.js app, click a button to display places with flowers near you.
          </p>
        </div>
      </div>
    </div>
  );
}
