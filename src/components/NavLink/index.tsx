import Link from "next/link";

interface NavLinkProps {
  path: string;
  title: string;
}

import styles from "./styles.module.scss";

export function NavLink({ path, title }: NavLinkProps) {
  return (
    <Link href={path}>
      <a className={styles.link}>{title}</a>
    </Link>
  );
}