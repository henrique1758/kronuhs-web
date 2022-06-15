import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  bgColor: 'green' | 'black';
}

import styles from "./styles.module.scss";

export function Button({ title, bgColor }: ButtonProps) {
  return (
    <button className={`
      ${styles.container} ${bgColor === 'black' ? styles.bgBlack : styles.bgGreen}
    `}>
      {title}
    </button>
  );
}