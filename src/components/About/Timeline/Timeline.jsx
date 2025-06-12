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
      if (index < TimelineData.length - 1) {
        setIndexDirection([index + 1, 1]);
      }
    };

    const prevStage = () => {
      if (index > 0) {
        setIndexDirection([index - 1, -1]);
      }
    };

  return (
    <div className={styles.TimelineWrapper}>
      <h1 className={styles.Title}>My Programming Journey</h1>

      <div className={styles.StageContainer}>
        <button onClick={prevStage} disabled={index === 0} className={`${styles.ArrowButton} ${index === 0 ? styles.Disabled : ''}`}>
          {"<"}
        </button>

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
              transition={{ duration: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className={styles.Year}>{stage.year}</h2>
              <h3 className={styles.CardTitle}>{stage.title}</h3>
              <p className={styles.Description}>{stage.description}</p>
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

        <button onClick={nextStage} disabled={index === TimelineData.length - 1} className={`${styles.ArrowButton} ${index === TimelineData.length - 1 ? styles.Disabled : ''}`}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Timeline;