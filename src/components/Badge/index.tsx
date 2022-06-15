interface BadgeProps {
  title: string;
}

import styles from "./styles.module.scss";

export function Badge({ title }: BadgeProps) {
  return (
    <div className={styles.badge}>
      {title}
    </div>
  );
}