import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <>
      <h1 className={styles.marquee}>
        <span>
          🚂 //// Weronika Kmiec, frontend developer unearthing
          the in-between of virtual and real //// JavaScript, React, Next.js,
          Three.js, HTML, CSS, Blender, Figma //// Contact:{" "}
          <a className="link" href="mailto:wercche@gmail.com">
            wercche@gmail.com
          </a>{" "}
          or DM me on{" "}
          <a
            className="link"
            target="_blank"
            href="https://www.instagram.com/wercche/"
          >
            instagram
          </a>{" "}
          ////{" "}
        </span>
      </h1>
      {/* <h1 className={styles.marquee + " " + styles.marquee2}>
        <span>
          Weronika Kmiec, an autodidact frontend developer unearthing the
          in-between of virtual and real // JavaScript, React, Next.js, Three.js,
          HTML, CSS, Blender, Figma //
        </span>
      </h1> */}
    </>
  );
}
