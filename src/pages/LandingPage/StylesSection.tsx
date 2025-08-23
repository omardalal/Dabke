import ParallaxLayer from "../../components/ParallaxLayer/ParallaxLayer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import VideoCard from "../../components/VideoCard/VideoCard";
import { STYLES_SECTION, DABKE_CARDS } from "../../constants/strings";
import styles from "./LandingPage.module.css";

export default function StylesSection() {
  return (
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
  );
}
