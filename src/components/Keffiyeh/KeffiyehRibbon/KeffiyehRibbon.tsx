import React from "react";
import KeffiyehPattern from "../KeffiyehPattern/KeffiyehPattern";
import ParallaxLayer from "../../ParallaxLayer/ParallaxLayer";
import styles from "./KeffiyehRibbon.module.css";

type Props = {
  width?: string;
  mdWidth?: string;
  opacity?: number;
};

const KeffiyehRibbon: React.FC<Props> = ({
  width = "2.75rem",
  mdWidth = "3.5rem",
  opacity = 0.18,
}) => (
  <div className={styles.ribbonWrapper}>
    <ParallaxLayer yRange={["-20%", "20%"]}>
      <div
        className={styles.ribbon}
        style={
          {
            "--ribbon-w": width,
            "--ribbon-w-md": mdWidth,
          } as React.CSSProperties
        }
      >
        <KeffiyehPattern opacity={opacity} />
        <div className={styles.tassels}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className={styles.tassel} />
          ))}
        </div>
        <div className={styles.overlay} />
      </div>
    </ParallaxLayer>
  </div>
);

export default KeffiyehRibbon;
