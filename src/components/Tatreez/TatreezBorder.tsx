import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import tatreezBanner from "../../assets/tatreezBanner.png";
import styles from "./TatreezBorder.module.css";

type Props = {
  repeatCount?: number;
  imageClassName?: string;
  moveOnScroll?: boolean;
  amplitudeVW?: number;
};

const TatreezBorder: React.FC<Props> = ({
  repeatCount = 3,
  imageClassName,
  moveOnScroll = false,
  amplitudeVW = 50,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll(
    moveOnScroll ? { target: ref, offset: ["start 80%", "end 20%"] } : undefined
  );
  const x = useTransform(
    scrollYProgress,
    [0, 10],
    [`-${amplitudeVW}vw`, `${amplitudeVW}vw`]
  );

  return (
    <div
      ref={ref}
      className={`${styles.borderOuter} ${
        moveOnScroll ? styles.borderOuterAnimated : ""
      }`}
    >
      <motion.div
        className={styles.border}
        style={moveOnScroll ? { x } : undefined}
      >
        {Array.from({ length: repeatCount }).map((_, i) => (
          <img
            key={i}
            src={tatreezBanner}
            alt="tatreez banner"
            className={`${styles.image} ${imageClassName || ""}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TatreezBorder;
