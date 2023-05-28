import { motion } from "framer-motion";

import styles from "./PreLoader.module.scss";

export function PreLoader() {
  const line1 = "Awaken Your Senses";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className={styles.wrapper}>
      <motion.h3
        className={styles.textContainer}
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {line1.split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.h3>
    </div>
  );
}
