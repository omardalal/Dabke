import React from "react";
import { motion } from "framer-motion";
import TatreezBorder from "../Tatreez/TatreezBorder";
import styles from "./VideoCard.module.css";

type Props = { title: string; region: string; description: string };

const VideoCard: React.FC<Props> = ({ title, region, description }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={styles.card}
  >
    <div className={styles.media}>
      <span className={styles.mediaLabel}>Video Placeholder</span>
    </div>
    <div className={styles.body}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.region}>{region}</span>
      </div>
      <p className={styles.desc}>{description}</p>
    </div>
    <div className={styles.fringe}>
      <TatreezBorder imageClassName={styles.tatreez} />
    </div>
  </motion.article>
);

export default VideoCard;
