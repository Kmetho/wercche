import styles from "./Work.module.css";
import Image from "next/image";

export default function Work() {
  return (
    <div className={styles.scrollable}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>websites</h2>
      </div>
      <div className={styles.kafelki}>
        <div className={styles.flowerFinder}>
          <Image
            className={styles.pic}
            src="/websites/flower-finder.png"
            width="1000"
            height="500"
            alt=""
          />
          <p>
            Next.js, data fetching, JSX, CSS, UI,{" "}
            <a href="https://flower-finder.netlify.app/" target="_blank">
              <span className={styles.link}>link</span>
            </a>
          </p>
        </div>
        <div className={styles.notes}>
          <Image
            className={styles.pic}
            src="/websites/notess.png"
            width="1000"
            height="500"
            alt=""
          />
          <p>
            React, JSX, CSS, UI,{" "}
            <a href="https://1vrfkp.csb.app/" target="_blank">
              <span className={styles.link}>link</span>
            </a>
          </p>
        </div>
        <div className={styles.crystals}>
          <Image
            className={styles.pic}
            src="/websites/crystals-mockup.png"
            width="1000"
            height="500"
            alt=""
          />
          <p>
            Three.js, HTML, CSS, Blender,{" "}
            <a href="https://crystalssss.netlify.app/" target="_blank">
              <span className={styles.link}>link</span>
            </a>
          </p>
        </div>
        <div className={styles.paulina}>
          <Image
            className={styles.pic}
            src="/websites/paulina.png"
            width="1000"
            height="600"
            alt=""
          />
          <p>
            HTML, CSS, working with the designer,{" "}
            <a href="https://kmetho.github.io/paulinarams/" target="_blank">
              <span className={styles.link}>link</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
