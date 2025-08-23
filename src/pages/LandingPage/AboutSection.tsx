import { motion } from "framer-motion";
import ParallaxLayer from "../../components/ParallaxLayer/ParallaxLayer";
import KeffiyehPattern from "../../components/Keffiyeh/KeffiyehPattern/KeffiyehPattern";
import { ABOUT, PILLS } from "../../constants/strings";
import type { ColorKey } from "../../constants/strings";
import styles from "./LandingPage.module.css";
import { mergeClasses } from "../../utils/uiUtils";

const PILL_CLASS: Record<ColorKey, string> = {
  red: styles.pillRed,
  green: styles.pillGreen,
  white: styles.pillWhite,
  black: styles.pillBlack,
};

const Pill: React.FC<{ label: string; color: ColorKey }> = ({
  label,
  color,
}) => (
  <span className={mergeClasses(styles.pill, PILL_CLASS[color])}>{label}</span>
);

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={mergeClasses(styles.container, styles.aboutGrid)}>
        <div>
          <h3 className={styles.aboutTitle}>{ABOUT.title}</h3>
          <p className={styles.aboutText}>{ABOUT.text}</p>
          <div className={styles.pills}>
            {PILLS.map((p) => (
              <Pill key={p.label} label={p.label} color={p.color} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.aboutCard}
        >
          <div className={styles.aboutMedia}>
            <span className={styles.aboutMediaLabel}>&lt;Hero Montage&gt;</span>
          </div>
          <div className={styles.aboutOverlay}>
            <ParallaxLayer yRange={["-6%", "6%"]}>
              <KeffiyehPattern opacity={0.12} />
            </ParallaxLayer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
