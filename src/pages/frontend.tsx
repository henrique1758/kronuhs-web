import { NewsletterBanner } from "../components/NewsletterBanner";
import { PostCard } from "../components/PostCard";
import styles from "../styles/Posts.module.scss";

export default function Posts() {
  return (
    <main className={styles.container}>
      <header className={styles.heading}>
        <h1>
          <span>Confira</span> os últimos posts sobre o mundo <span>Front-end</span>
        </h1>

        <p>Acompanhe tutoriais sobre o unviverso front-end.</p>
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