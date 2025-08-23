import { MotionConfig } from "framer-motion";
import KeffiyehRibbon from "../../components/Keffiyeh/KeffiyehRibbon/KeffiyehRibbon";
import { KeffiyehCorner } from "../../components/Keffiyeh/KeffiyehCorner/KeffiyehCorner";
import styles from "./LandingPage.module.css";
import HeroSection from "./HeroSection";
import StylesSection from "./StylesSection";
import OriginsSection from "./OriginsSection";
import AboutSection from "./AboutSection";
import FooterSection from "./FooterSection";

export default function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className={styles.main}>
        <KeffiyehRibbon />
        <KeffiyehCorner />
        <HeroSection />
        <StylesSection />
        <OriginsSection />
        <AboutSection />
        <FooterSection />
      </main>
    </MotionConfig>
  );
}
