import { parseISO } from "date-fns";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import { NewsletterBanner } from "../components/NewsletterBanner";
import { PostCard } from "../components/PostCard";
import { api } from "../services/api";
import styles from "../styles/Posts.module.scss";
import { formAtDate } from "../utils/formatDate";

type Post = {
  id: string;
  title: string;
  content: string;
  bannerUrl: string;
  slug: string;
  author: {
    firstName: string;
    avatarUrl: string;
  };
  category: {
    name: string;
  };
  _count: {
    views: number;
    likes: number;
  };
  createdAt: string;
}

interface PostsResponse extends Post {
  isDraft: boolean;
}

interface PostProps {
  posts: Post[];
}

export default function Posts({ posts }: PostProps) {
  return (
    <motion.main 
      className={styles.container}
      exit={{ opacity: 0 }}
    >
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
        {posts.map(post => (
          <PostCard 
            key={post.id} 
            title={post.title}
            content={post.content}
            slug={post.slug}
            bannerUrl={post.bannerUrl}
            author={post.author}
            category={post.category.name}
            createdAt={post.createdAt}
          />
        ))}
      </section>

      <section className={styles.newsletter}>
        <NewsletterBanner />
      </section>
    </motion.main>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {

  const response = await api.get<PostsResponse[]>('/posts');

  const posts = response.data
    .filter(post => post.isDraft === false)
    .slice(0, 6)
    .map(post => {
      return {
        id: post.id,
        title: post.title,
        content: post.content,
        bannerUrl: post.bannerUrl,
        slug: post.slug,
        author: {
          firstName: post.author.firstName,
          avatarUrl: post.author.avatarUrl
        },
        category: {
          name: post.category.name
        },
        createdAt: formAtDate(parseISO(post.createdAt))
      }
    });
  
  return {
    props: {
      posts,
    }
  }
}