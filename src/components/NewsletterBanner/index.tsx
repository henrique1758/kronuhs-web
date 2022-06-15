import styles from "./styles.module.scss";

export function NewsletterBanner() {
  return (
    <div className={styles.container}>
      <h3>Quer receber tutoriais semanalmente?</h3>

      <h2>Inscreva-se na nossa newsletter</h2>

      <form>
        <input type="email" placeholder="Seu e-mail..."/>

        <button type="submit">
          Inscrever-se
        </button>
      </form>
    </div>
  );
}