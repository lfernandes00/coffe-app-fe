"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { PreLoader } from "../components/PreLoader";
import Landing from "../sections/Landing";

import styles from "../styles/page.module.scss";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: "50%", opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <PreLoader />
          </motion.div>
        )}
      </AnimatePresence>
      <Landing />
    </>
  );
}
