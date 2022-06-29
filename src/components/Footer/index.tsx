/* eslint-disable @next/next/no-img-element */
import { PaperPlaneTilt } from "phosphor-react";
import { Input } from "../Input";
import styles from "./styles.module.scss";

export function Footer() {
    return (
        <footer className={styles.container}>
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
    );
}