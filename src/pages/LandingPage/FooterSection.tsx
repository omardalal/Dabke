import TatreezBorder from "../../components/Tatreez/TatreezBorder";
import { FOOTER_TEXT } from "../../constants/strings";
import styles from "./LandingPage.module.css";

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.footerText}>{FOOTER_TEXT}</p>
      </div>
      <div className={styles.footerBorder}>
        <TatreezBorder repeatCount={5} moveOnScroll />
      </div>
    </footer>
  );
}
