/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { PaperPlaneTilt } from "phosphor-react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { MostSeenCard } from "../components/MostSeenCard";
import { NewsletterBanner } from "../components/NewsletterBanner";
import { PostCard } from "../components/PostCard";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
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
                <Input placeholder="Seu e-mail.." />
              </div>
              <Button title="Inscrever-se" bgColor="green" />
            </form>
          </div>

          <Image width={497} height={427} src="/heroImage.svg" alt="imagem de um jovem usando um computador" />
        </section>

        <section className={styles.mostSeen}>
          <h2>Mais <span>Vistos</span></h2>

          <div className={styles.wrapper}>
            <MostSeenCard />
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

      <footer className={styles.footer}>
        <div className={styles.content}>
          <img src="/footer-logo.svg" alt="footer-logo" className={styles.logo} />
          
          <div>
            <h2>Pages</h2>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Posts</a>
              </li>

              <li>
                <a href="#">Front-end</a>
              </li>

              <li>
                <a href="#">Back-end</a>
              </li>
            </ul>
          </div>

          <div>
            <h2>Social</h2>

            <ul>
              <li>
                <a href="#">Linkedin</a>
              </li>

              <li>
                <a href="#">Github</a>
              </li>
            </ul>
          </div>

          <div>
            <h2>Contact</h2>

            <form>
              <h3>henriquemonteiro942@gmail.com</h3>

              <div className={styles.formGroup}>
                <Input type="email" placeholder="Send a message" />

                <button>
                  <PaperPlaneTilt />
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}