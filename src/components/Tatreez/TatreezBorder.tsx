import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import tatreezBanner from "../../assets/tatreezBanner.png";
import { mergeClasses } from "../../utils/uiUtils";
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const amp = moveOnScroll ? amplitudeVW : 0;
  const x = useTransform(scrollYProgress, [0, 6], [`-${amp}vw`, `${amp}vw`]);

  return (
    <div
      ref={ref}
      className={mergeClasses(
        styles.borderOuter,
        moveOnScroll && styles.borderOuterAnimated
      )}
    >
      <motion.div className={styles.border} style={{ x }}>
        {Array.from({ length: repeatCount }).map((_, i) => (
          <img
            key={i}
            src={tatreezBanner}
            alt="tatreez banner"
            className={mergeClasses(styles.image, imageClassName)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TatreezBorder;
