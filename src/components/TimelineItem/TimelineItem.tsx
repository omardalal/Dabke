import React from "react";
import { motion } from "framer-motion";
import styles from "./TimelineItem.module.css";

type Props = { year: string; text: string };

const TimelineItem: React.FC<Props> = ({ year, text }) => (
  <motion.li
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={styles.item}
  >
    <span className={styles.dot} />
    <div className={styles.year}>{year}</div>
    <p className={styles.text}>{text}</p>
  </motion.li>
);

export default TimelineItem;
