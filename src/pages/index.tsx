/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { MostSeenPostsSlider } from "../components/MostSeenPosts";
import { NewsletterBanner } from "../components/NewsletterBanner";
import { PostCard } from "../components/PostCard";
import styles from "../styles/Home.module.scss";

const posts = [
  {
    id: "sdjksdjksduwe873834",
    title: "Iniciando no react js",
    description: "De 01 a 07 de junho de 2020 tivemos a primeira Next Level Week. #NLW 🚀 é uma experiência online com muito conteúdo prático.é uma experiência online com muito conteúdo prático."
  },
  {
    id: "skdcno23761ncjdkfjdkfv",
    title: "Context Api: O que é?",
    description: "De 01 a 07 de junho de 2020 tivemos a primeira Next Level Week. #NLW 🚀 é uma experiência online com muito conteúdo prático.é uma experiência online com muito conteúdo prático."
  },
  {
    id: "sdkjnscjs2s039304d-9",
    title: "Mapas com react js e leaflet",
    description: "De 01 a 07 de junho de 2020 tivemos a primeira Next Level Week. #NLW 🚀 é uma experiência online com muito conteúdo prático.é uma experiência online com muito conteúdo prático."
  },
  {
    id: "2982938hckjkdfcdkjnjdf",
    title: "Introdução ao redux toolkit",
    description: "De 01 a 07 de junho de 2020 tivemos a primeira Next Level Week. #NLW 🚀 é uma experiência online com muito conteúdo prático.é uma experiência online com muito conteúdo prático."
  }
]

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            Domine uma <span>stack</span> podersa 
            através de tutoriais <span>profissionais</span> e gratuitos.
          </h1>

          <p>
            Conteúdo semanal sobre o universo javascript com 
            foco na prática.  Quer ser avisado quando um novo
            tutorial for publicado? Então inscreva-se na nossa 
            newsletter.
          </p>

          <form>
            <div className={styles.inputGroup}>
              <Input type="email" placeholder="Seu e-mail.." />
            </div>
            <Button title="Inscrever-se" bgColor="green" />
          </form>
        </div>

        <Image width={497} height={427} src="/heroImage.svg" alt="imagem de um jovem usando um computador" />
      </section>

      <section className={styles.mostSeen}>
        <h2>Mais <span>Vistos</span></h2>

        <div className={styles.wrapper}>
          <MostSeenPostsSlider posts={posts} />
        </div>
      </section>

      <section className={styles.last}>
        <h2>Últimos <span>Tutoriais</span></h2>

        <div className={styles.wrapper}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>

      <section className={styles.newsletter}>
        <NewsletterBanner />
      </section>
    </main>
  );
}