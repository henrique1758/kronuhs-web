import styles from "./styles.module.scss";

/* eslint-disable @next/next/no-img-element */
export function Comment() {
    return (
        <li className={styles.wrapper}>
            <img src="/man.jpg" alt="comment" />

            <div className={styles.commentData}>
                <div className={styles.commentInfo}>
                    <strong>Rafael Gomes</strong>

                    <span>há 5 minutos</span>
                </div>

                <p>
                    Conteúdo informativo e de qualidade. me ajudou muito!!! Obrigada de verdade
                    Conteúdo informativo e de qualidade. me ajudou muito!!! Obrigada de verdade
                    Conteúdo informativo e de qualidade. me ajudou muito!!! Obrigada de verdade
                    Conteúdo informativo e de qualidade. me ajudou muito!!! Obrigada de verdade
                    Conteúdo informativo e de qualidade. me ajudou muito!!! Obrigada de verdade
                </p>
            </div>
        </li>
    );
}