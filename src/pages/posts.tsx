import { NewsletterBanner } from "../components/NewsletterBanner";
import { PostCard } from "../components/PostCard";
import styles from "../styles/Posts.module.scss";

export default function Posts() {
  return (
    <main className={styles.container}>
      <header className={styles.heading}>
        <h1>
          <span>Confira</span> os nossos últimos <span>posts</span>
        </h1>

        <p>
          Veja aqui posts sobre diversos temas, 
          como javascript, html, css, react, node,
          sass e muito mais.
        </p>
      </header>

      <section className={styles.postsContainer}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>

      <section className={styles.newsletter}>
        <NewsletterBanner />
      </section>
    </main>
  );
}