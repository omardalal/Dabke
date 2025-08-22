import React, { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import KeffiyehCornerImage from "../../../assets/KeffiyehCorner.png";
import styles from "./KeffiyehCorner.module.css";

type Props = {
  moveOnScroll?: boolean;
  strength?: number;
  rotate?: number;
  mouseStrength?: number;
  outroStart?: number;
  outroEnd?: number;
  exitPx?: number;
};

export const KeffiyehCorner: React.FC<Props> = ({
  moveOnScroll = true,
  strength = 60,
  rotate = 6,
  mouseStrength = 10,
  outroStart = 0.08,
  outroEnd = 0.22,
  exitPx = 220,
}) => {
  const { scrollYProgress } = useScroll();

  const baseX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, moveOnScroll ? strength : 0]
  );
  const baseY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, moveOnScroll ? strength * 0.6 : 0]
  );
  const baseR = useTransform(
    scrollYProgress,
    [0, 1],
    [0, moveOnScroll ? rotate : 0]
  );

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * mouseStrength);
      my.set((e.clientY / window.innerHeight - 0.5) * mouseStrength);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseStrength, mx, my]);
  const mX = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.2 });
  const mY = useSpring(my, { stiffness: 120, damping: 20, mass: 0.2 });

  const xDrift = useTransform(
    [baseX, mX],
    ([a, b]) => (a as number) + (b as number)
  );
  const yDrift = useTransform(
    [baseY, mY],
    ([a, b]) => (a as number) + (b as number)
  );

  const outro = useTransform(scrollYProgress, [outroStart, outroEnd], [0, 1]);
  const outX = useTransform(outro, (v) => -exitPx * v);
  const outY = useTransform(outro, (v) => -exitPx * v);
  const outR = useTransform(outro, (v) => -rotate * 0.9 * v);
  const opacity = useTransform(outro, [0, 1], [1, 0]);

  const x = useTransform(
    [xDrift, outX],
    ([a, b]) => (a as number) + (b as number)
  );
  const y = useTransform(
    [yDrift, outY],
    ([a, b]) => (a as number) + (b as number)
  );
  const r = useTransform(
    [baseR, outR],
    ([a, b]) => (a as number) + (b as number)
  );

  return (
    <motion.div className={styles.keffiyehCorner} style={{ opacity }}>
      <motion.img
        src={KeffiyehCornerImage}
        alt=""
        className={`${styles.img} ${styles.back}`}
        style={{
          x: useTransform(x, (v) => v * 0.5),
          y: useTransform(y, (v) => v * 0.5),
          rotate: useTransform(r, (v) => v * 0.5),
        }}
      />
      <motion.img
        src={KeffiyehCornerImage}
        alt="Keffiyeh"
        className={styles.img}
        style={{ x, y, rotate: r }}
      />
    </motion.div>
  );
};
