import React, { useState, useEffect } from 'react';
import { motion } from '../../../node_modules/framer-motion/dist/framer-motion';
import Image from 'next/image';

export default function ThisCantBeReached({ imgPath }) {
  const [isAnimated, setIsAnimated] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const getRandomPosition = () => {
    const { width, height } = windowSize;
    const randomX = Math.random() * (width/2-200) * (Math.random()>0.5? 1: -1); // Adjust the value (200) according to your needs
    const randomY = Math.random() * (height/2-200) * (Math.random()>0.5? 1: -1); // Adjust the value (200) according to your needs
    console.log(`to: ${JSON.stringify({ x: randomX, y: randomY })}`)
    return { x: randomX, y: randomY };
  };

  const getOriginPosition = () => {
    const { width, height } = windowSize;
    const randomX = width / 2; // Adjust the value (200) according to your needs
    const randomY = height / 2; // Adjust the value (200) according to your needs
    console.log(`from: ${JSON.stringify({ x: randomX, y: randomY })}`)
    return { x: randomX, y: randomY };
  };

  const handleAnimationComplete = () => {
    console.log('finished');

    setTimeout(() => {
      setIsAnimated((pre) => !pre);
    }, 1000);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Add event listener to update window size on resize
    window.addEventListener('resize', handleResize);

    // Initial window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'purple', 'orange']; // Add more colors if desired
    const randomIndex = Math.floor(Math.random() * colors.length);
    console.log(colors[randomIndex]);
    return colors[randomIndex];
  };

  // const getRandomRotation = () => {
  //   return Math.random() * 360; // Random rotation value between 0 and 360 degrees
  // };

  // const getRandomScale = () => {
  //   return 0.5 + Math.random() * 1; // Random scale value between 0.5 and 1.5
  // };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={
        isAnimated ? { opacity: 1, scale: 1, ...getRandomPosition() } : {}
      }
      transition={{ type: 'spring', stiffness: 200, duration: 5 }}
      onAnimationComplete={handleAnimationComplete}
      className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ color: getRandomColor() }}
    >
      <h1 className="text-4xl font-bold">{imgPath}</h1>
      <Image src={imgPath} alt="Animated Image" width={200} height={200} />
    </motion.div>
  );
}
