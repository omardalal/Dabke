import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ParallaxLayer.module.css";

type Props = {
  yRange?: [string | number, string | number];
  className?: string;
  children: React.ReactNode;
};

const ParallaxLayer: React.FC<Props> = ({
  yRange = ["-10%", "10%"],
  className = "",
  children,
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <motion.div style={{ y }} className={`${styles.layer} ${className}`}>
      {children}
    </motion.div>
  );
};

export default ParallaxLayer;
