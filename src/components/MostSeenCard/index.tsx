/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Clock, Eye, HandsClapping } from "phosphor-react";
import ReactMarkdown from "react-markdown";
import { Badge } from "../Badge";

interface MostSeenCard {
  title: string;
  content: string;
  likes: number;
  views: number;
  publishedAt: string;
  author: {
    firstName: string;
    avatarUrl: string;
  };
}

import styles from "./styles.module.scss";

export function MostSeenCard({ title, content, likes, views, author, publishedAt }: MostSeenCard) {
  return (
    <Link href="/posts">
      <a className={styles.container}>
        <article className={styles.wrapper}>
          <img src="/bg.png" alt="banner" className={styles.banner} />

          <div className={styles.postData}>
            <h2 title={title}>{title}</h2>

            <div className={styles.infos}>
              <div className={styles.info}>
                {likes} <HandsClapping />
              </div>

              <div className={styles.info}>
                {views} <Eye />
              </div>

              <div className={styles.info}>
                4 min <Clock />
              </div>
            </div>

            <p>
              <ReactMarkdown
                className={styles.shortContent}
              >
                {content}
              </ReactMarkdown>
            </p>

            <footer>
              <div className={styles.authorContainer}>
                <Image 
                  src={author.avatarUrl} 
                  loader={() => author.avatarUrl} 
                  width={33} 
                  height={33} 
                  alt="author" 
                />

                <span>{author.firstName}</span>
              </div>

              <time>{publishedAt}</time>
            </footer>
          </div>
        </article>
      </a>
    </Link>
  );
}