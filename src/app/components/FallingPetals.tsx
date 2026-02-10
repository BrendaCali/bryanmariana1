import { motion } from 'motion/react';

export function FallingPetals() {
  const petals = [...Array(20)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 5,
    size: 8 + Math.random() * 8,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-5">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            background: 'radial-gradient(circle, #FFB6C1, #FF69B4)',
          }}
          initial={{ y: '-10vh', opacity: 0 }}
          animate={{
            y: '110vh',
            opacity: [0, 0.6, 0],
            rotate: [0, 360, 720],
            x: [0, -50, 50, -30, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
