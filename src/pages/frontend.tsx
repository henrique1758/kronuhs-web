import { parseISO } from "date-fns";
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
    <main className={styles.container}>
      <header className={styles.heading}>
        <h1>
          <span>Confira</span> os últimos posts sobre o mundo <span>Front-end</span>
        </h1>

        <p>Acompanhe tutoriais sobre o unviverso front-end.</p>
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
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {

  const response = await api.get<PostsResponse[]>('/posts');

  const posts = response.data
    .filter(post => post.category.name === "frontend")
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