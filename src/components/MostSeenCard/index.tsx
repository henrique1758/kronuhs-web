/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Clock, Eye, HandsClapping } from "phosphor-react";
import { Badge } from "../Badge";

interface MostSeenCard {
  title: string;
  description: string;
}

import styles from "./styles.module.scss";

export function MostSeenCard({ title, description }: MostSeenCard) {
  return (
    <Link href="/posts">
      <a className={styles.container}>
        <article className={styles.wrapper}>
          <img src="/bg.png" alt="banner" className={styles.banner} />

          <div className={styles.postData}>
            <h2 title={title}>{title}</h2>

            <div className={styles.infos}>
              <div className={styles.info}>
                88 <HandsClapping />
              </div>

              <div className={styles.info}>
                102 <Eye />
              </div>

              <div className={styles.info}>
                4 min <Clock />
              </div>
            </div>

            <p className={styles.shortDescription}>
              {description}
            </p>

            <footer>
              <div className={styles.authorContainer}>
                <Image src="/man.jpg" width={33} height={33} alt="author" />

                <span>Luiz</span>
              </div>

              <time>30 de maio, 2022</time>
            </footer>
          </div>
        </article>
      </a>
    </Link>
  );
}