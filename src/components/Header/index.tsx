import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import { NavLink } from "../NavLink";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="logomarca da kronuhs" width={95} height={33} />
          </a>
        </Link>

        <nav>
          <ul>
            <li>
              <NavLink path="/" title="Home" />
            </li>

            <li>
              <NavLink path="/posts" title="Posts" />
            </li>

            <li>
              <NavLink path="/frontend" title="Front-end" />
            </li>

            <li>
              <NavLink path="/backend" title="Back-end" />
            </li>
          </ul>
        </nav>

        <div className={styles.buttons}>
          <Button title="Sign In" bgColor="green" />
          <Button title="Sign Up" bgColor="black" />
        </div>
      </div>
    </header>
  );
}