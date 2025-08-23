import { motion } from "framer-motion";
import ParallaxLayer from "../../components/ParallaxLayer/ParallaxLayer";
import KeffiyehPattern from "../../components/Keffiyeh/KeffiyehPattern/KeffiyehPattern";
import TatreezBorder from "../../components/Tatreez/TatreezBorder";
import { HERO, CHIPS } from "../../constants/strings";
import type { ColorKey } from "../../constants/strings";
import { mergeClasses } from "../../utils/uiUtils";
import styles from "./LandingPage.module.css";

const CHIP_CLASS: Record<ColorKey, string> = {
  red: styles.chipRed,
  green: styles.chipGreen,
  white: styles.chipWhite,
  black: styles.chipBlack,
};

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <KeffiyehPattern opacity={0.08} />
      </div>
      <div className={styles.container}>
        <ParallaxLayer yRange={["-6%", "6%"]}>
          <h1 className={styles.heroTitle}>
            {HERO.titlePrefix}{" "}
            <span className={styles.heroAccent}>{HERO.titleAccent}</span>
          </h1>
        </ParallaxLayer>
        <ParallaxLayer yRange={["-10%", "10%"]}>
          <p className={styles.heroSubtitle}>{HERO.subtitle}</p>
        </ParallaxLayer>
        <div className={styles.chips}>
          {CHIPS.map((c) => (
            <motion.span
              key={c.label}
              whileHover={{ y: -3 }}
              className={mergeClasses(styles.chip, CHIP_CLASS[c.color])}
            >
              {c.label}
            </motion.span>
          ))}
        </div>
      </div>
      <div className={styles.heroBorder}>
        <TatreezBorder repeatCount={5} moveOnScroll />
      </div>
    </section>
  );
}
