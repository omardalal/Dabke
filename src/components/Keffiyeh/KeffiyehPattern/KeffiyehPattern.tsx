import React from "react";
import { colors } from "../../../themes/colors";
import styles from "./KeffiyehPattern.module.css";

type Props = {
  opacity?: number;
};

const KeffiyehPattern: React.FC<Props> = ({ opacity = 0.08 }) => (
  <svg className={`${styles.pattern}`} aria-hidden preserveAspectRatio="none">
    <defs>
      <pattern
        id="fishnet"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M0 20 Q20 0 40 20 Q20 40 0 20 Z"
          stroke={colors.white}
          strokeWidth="2"
          fill="none"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#fishnet)" opacity={opacity} />
  </svg>
);

export default KeffiyehPattern;
