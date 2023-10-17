import styles from "./page.module.css";
import Banner from "./components/Banner";
import Work from "./components/Work";
import BlenderRender from "./components/BlenderRender";

export default function Home() {
  return (
    <main className={styles.flex}>
      <Banner />
      <div className={styles.grid}>
        <Work />
        <BlenderRender />
      </div>
    </main>
  );
}
