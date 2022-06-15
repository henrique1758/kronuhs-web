/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Clock, Eye, HandsClapping } from "phosphor-react";
import { Badge } from "../Badge";

interface MostSeenCard {
  path?: string;
}

import styles from "./styles.module.scss";

export function MostSeenCard({ path }: MostSeenCard) {
  return (
    <a href="/posts" className={styles.container}>
      <img className={styles.banner} src="/bg.png" alt="bg" />

      <div className={styles.postContent}>
        <Badge title="JS" />

        <h2>Arrow Functions</h2>

        <div className={styles.analytics}>
          <div className={styles.info}>
            88 <HandsClapping />
          </div>

          <div className={styles.info}>
            102 <Eye />
          </div>

          <div className={styles.info}>
            4 min de leitura <Clock />
          </div>
        </div>
      </div>

      <div className={styles.postInfos}>
        <div className={styles.authorInfo}>
          <Image src="/man.jpg" width={33} height={33} alt="man" />
          <span>Luíz</span>
        </div>

        <span className={styles.publishedDate}>30 de maio, 2022</span>
      </div>
    </a>
  );
}