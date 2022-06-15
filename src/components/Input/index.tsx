import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

import styles from "./styles.module.scss";

export function Input({ ...props }: InputProps) {
  return(
    <input {...props} className={styles.input} />
  );
}