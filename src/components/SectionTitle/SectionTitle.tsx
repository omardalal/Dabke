import React from "react";
import styles from "./SectionTitle.module.css";

type Props = { title: string; subtitle?: string };

const SectionTitle: React.FC<Props> = ({ title, subtitle }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>{title}</h2>
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  </div>
);

export default SectionTitle;
