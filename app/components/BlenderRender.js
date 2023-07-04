import styles from "./BlenderRender.module.css";
import Image from "next/image";

export default function BlenderRender() {
  return (
    <div className={styles.scrollable}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>blender renders</h2>
      </div>
      <div className={styles.kafelki}>
        <Image
          className={styles.pic}
          src="https://64.media.tumblr.com/ac435fe98f81407c58fe1cea2b6be1d0/6728275daf890aea-df/s2048x3072/0a4947b9dcc99e37500091f3c6781745c511ccd6.pnj"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="https://64.media.tumblr.com/1f4af273a436a558e2b20ad265168358/45a8811a39fe55ea-d6/s1280x1920/e5f872e132a0cf25a7f9060d66f2e96977aedc5e.png"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="https://64.media.tumblr.com/470a0ffaa839e9d5625bc0f3cab8ece9/da19884ba70ac8fd-a8/s1280x1920/96db224f3a965c840e0d597e27eef1642ffd45ee.png"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="https://64.media.tumblr.com/5c5e41e11f580458f6c7e0f2369adc7f/973a92da19791efa-ed/s1280x1920/9e13baeb61401ffa916b8d7b54c408502f0e9ce6.png"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="https://64.media.tumblr.com/46da24aa4a3af23337fef6f5453cc324/1eb2a0c47707e49d-64/s1280x1920/d0d47cae077b507212fa93934145ecc0cfc89828.png"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="https://64.media.tumblr.com/29fd6ae937c18e04098747ab9a9ac940/9a0f6b75b354567c-6e/s1280x1920/eee80d3a9459310d80afa2b96a92bfaf8e2eedeb.png"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="https://64.media.tumblr.com/da6d1881593e82f7bb6628fdc8bbfb8a/a512bec2de018f6c-c0/s1280x1920/7bba59ca905c664c2dbeec97b20bc87793cf637d.png"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="https://64.media.tumblr.com/2f9decbc2f767f107856169c2fe1ef34/01e53a2c6154ed1c-9a/s2048x3072/62c9bbac99d6e5fe3e4a6608ca4920a9fde5520c.pnj"
          width="500"
          height="500"
          alt=""
        />
        <Image
          className={styles.pic}
          src="https://64.media.tumblr.com/01c4ad2f2409c3cae9e84ebcbd372cbb/eeb5f86d902a1675-fc/s1280x1920/33ca029d691a8b30292f6b124a78cef540ccd0fe.png"
          width="500"
          height="500"
          alt=""
        />
      </div>
    </div>
  );
}
