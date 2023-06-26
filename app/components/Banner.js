import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <>
      <h1 className={styles.marquee}>
        <span>
          🚂 //// Weronika Kmiec, web developer & 3D artist //// JavaScript,
          React, Next.js, Three.js, HTML, CSS, Blender, Figma //// Contact:{" "}
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
          </a>
        </span>
      </h1>
    </>
  );
}
