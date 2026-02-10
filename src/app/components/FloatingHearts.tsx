import { motion } from 'motion/react';

export function FloatingHearts() {
  const hearts = [...Array(15)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    size: 20 + Math.random() * 20,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-5">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-400 opacity-70"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-20vh',
            opacity: [0, 0.7, 0],
            x: [0, 30, -20, 10, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
