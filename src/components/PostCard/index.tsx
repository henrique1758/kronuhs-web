/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./styles.module.scss";

export function PostCard() {
  return (
    <div className={styles.container}>
      <a href="#">
        <img 
          src="/mac.png" 
          alt="macbook" 
          className={styles.banner} 
        />

        <div className={styles.content}>
          <h3>The best nature parks to visit</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed vestibulum consectetur libero sed tempus. 
            Sed libero lectus, viverra at sem ac, laoreet pellentesque est...
          </p>
        </div>

        <div className={styles.info}>
          <div className={styles.authorInfo}>
            <Image src="/man.jpg" width={33} height={33} alt="man" />
            <span>Luíz</span>
          </div>

          <span className={styles.publishedDate}>30 de maio, 2022</span>
        </div>
      </a>
    </div>
  );
}