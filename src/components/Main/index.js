import React, { useState } from 'react';
import { motion } from "framer-motion";

import WineCard from '../WineCard';
import winesData from '../../service/wine.json';

import { 
  Container,
  Title,
  BoldLabel,
} from './styles';

const easing = [0.6, -0.05, 0.01, 0.99];
const fade = {
  initial: {
    opacity: 0,
    transition: { 
      ease: easing 
    }
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: easing
    }
  }
};

const fadeLeft = {
  initial: {
    x: -80,
    opacity: 0,
    transition: {
      ease: easing
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing
    }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Main = () => {
  const [wines, setWines] = useState(winesData);

  return (
    <motion.div initial='initial' animate='animate' variants={fade}>
    <Container>
      <div style={{ marginBottom: 50 }} >
        <Title>Choose your <BoldLabel>Wine</BoldLabel></Title>
      </div>
        <motion.div variants={stagger}>
          {wines.map(wine => (
            <motion.div variants={fadeLeft}>
              <WineCard wine={wine} />
            </motion.div>
          ))}
        </motion.div>
    </Container>
    </motion.div>
  );
}

export default Main;