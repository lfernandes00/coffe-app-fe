"use client";
import { motion } from "framer-motion";
import { Button } from "antd";

import styles from "./Landing.module.scss";

export default function Landing() {
  const firstSentence = "Coffe Brand";
  const lastSentence = "Unique Sensations";

  const spanVariants = {
    visible: {
      y: 0,
      scaleY: 1,
    },
    hover: {
      y: [-1, -2, -2.8, 0.9, 0],
      scaleY: [1, 1.3, 0.8, 1, 1.2],
    },
  };

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.landingContent}>
        <h1>
          {firstSentence.split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={spanVariants}
              initial="visible"
              whileHover="hover"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <h2>
          {lastSentence.split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={spanVariants}
              initial="visible"
              whileHover="hover"
            >
              {letter}
            </motion.span>
          ))}
        </h2>
        <Button className={styles.heroBtn}>Find out more</Button>
      </div>
    </div>
  );
}
