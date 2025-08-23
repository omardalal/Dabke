import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import TatreezBorder from "../../components/Tatreez/TatreezBorder";
import { ORIGINS_SECTION, TIMELINE } from "../../constants/strings";
import styles from "./LandingPage.module.css";

export default function OriginsSection() {
  return (
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
  );
}
