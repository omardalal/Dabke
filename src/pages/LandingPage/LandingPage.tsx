import { MotionConfig, motion } from "framer-motion";
import KeffiyehRibbon from "../../components/Keffiyeh/KeffiyehRibbon/KeffiyehRibbon";
import KeffiyehPattern from "../../components/Keffiyeh/KeffiyehPattern/KeffiyehPattern";
import ParallaxLayer from "../../components/ParallaxLayer/ParallaxLayer";
import TatreezBorder from "../../components/Tatreez/TatreezBorder";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import VideoCard from "../../components/VideoCard/VideoCard";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import {
  HERO,
  CHIPS,
  STYLES_SECTION,
  DABKE_CARDS,
  ORIGINS_SECTION,
  TIMELINE,
  ABOUT,
  PILLS,
  FOOTER_TEXT,
} from "../../constants/constants";
import styles from "./LandingPage.module.css";
import { KeffiyehCorner } from "../../components/Keffiyeh/KeffiyehCorner/KeffiyehCorner";

export default function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className={styles.main}>
        <KeffiyehRibbon />
        <KeffiyehCorner />

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
                  className={`${styles.chip} ${
                    c.color === "red"
                      ? styles.chipRed
                      : c.color === "green"
                      ? styles.chipGreen
                      : c.color === "white"
                      ? styles.chipWhite
                      : styles.chipBlack
                  }`}
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

        <section className={styles.section}>
          <div className={styles.container}>
            <SectionTitle
              title={STYLES_SECTION.title}
              subtitle={STYLES_SECTION.subtitle}
            />

            <div className={styles.gridCards}>
              {DABKE_CARDS.map((d) => (
                <VideoCard
                  key={d.title}
                  title={d.title}
                  region={d.region}
                  description={d.description}
                />
              ))}
            </div>
          </div>

          <ParallaxLayer yRange={["10%", "-10%"]}>
            <div className={styles.redFade} />
          </ParallaxLayer>
        </section>

        <section className={`${styles.section} ${styles.sectionDim}`}>
          <div className={styles.container}>
            <SectionTitle
              title={ORIGINS_SECTION.title}
              subtitle={ORIGINS_SECTION.subtitle}
            />
            <div className={styles.timelineWrap}>
              <div className={styles.timelineBackbone} />
              <ul className={styles.timelineList}>
                {TIMELINE.map((t) => (
                  <TimelineItem key={t.year} year={t.year} text={t.text} />
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.timelineBorder}>
            <TatreezBorder repeatCount={5} moveOnScroll />
          </div>
        </section>

        <section className={styles.section}>
          <div className={`${styles.container} ${styles.aboutGrid}`}>
            <div>
              <h3 className={styles.aboutTitle}>{ABOUT.title}</h3>
              <p className={styles.aboutText}>{ABOUT.text}</p>
              <div className={styles.pills}>
                {PILLS.map((p) => (
                  <span
                    key={p.label}
                    className={`${styles.pill} ${
                      p.color === "red"
                        ? styles.pillRed
                        : p.color === "green"
                        ? styles.pillGreen
                        : p.color === "white"
                        ? styles.pillWhite
                        : styles.pillBlack
                    }`}
                  >
                    {p.label}
                  </span>
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
                <span className={styles.aboutMediaLabel}>
                  &lt;Hero Montage&gt;
                </span>
              </div>
              <div className={styles.aboutOverlay}>
                <ParallaxLayer yRange={["-6%", "6%"]}>
                  <KeffiyehPattern opacity={0.12} />
                </ParallaxLayer>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.container}>
            <p className={styles.footerText}>{FOOTER_TEXT}</p>
          </div>
          <div className={styles.footerBorder}>
            <TatreezBorder repeatCount={5} moveOnScroll />
          </div>
        </footer>
      </main>
    </MotionConfig>
  );
}
