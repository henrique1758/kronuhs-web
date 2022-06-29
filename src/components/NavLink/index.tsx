import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  path: string;
  title: string;
}

import styles from "./styles.module.scss";

export function NavLink({ path, title }: NavLinkProps) {
  const router = useRouter();

  const { pathname } = router;

  const isActive = pathname === path;

  return (
    <Link href={path}>
      <a className={`${styles.link} ${isActive && styles.linkActive}`}>{title}</a>
    </Link>
  );
}