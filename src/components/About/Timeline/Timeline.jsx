import React, { useState } from 'react';
import styles from './Timeline.module.css';
import TimelineData from './TimelineData';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants with direction-aware sliding
const variants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
  }),
};

function Timeline() {
  const [[index, direction], setIndexDirection] = useState([0, 0]);
  const stage = TimelineData[index];

  const nextStage = () => {
    setIndexDirection([(index + 1) % TimelineData.length, 1]);
  };

  const prevStage = () => {
    setIndexDirection([
      (index - 1 + TimelineData.length) % TimelineData.length,
      -1,
    ]);
  };

  return (
    <div className={styles.TimelineWrapper}>
      <h1>My Programming Journey</h1>

      <div className={styles.StageContainer}>
        <div className={styles.ArrowLeft} onClick={prevStage}>←</div>

        <div className={styles.StageCardWrapper}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${index}-${direction}`} // ensure full re-render
              className={styles.StageCard}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.15 }}
            >
              <h2>{stage.year}</h2>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              {stage.image && (
                <img
                  src={stage.image}
                  alt={stage.title}
                  className={styles.StageImage}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.ArrowRight} onClick={nextStage}>→</div>
      </div>
    </div>
  );
}

export default Timeline;