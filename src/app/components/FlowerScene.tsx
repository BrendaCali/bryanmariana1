import { motion } from 'motion/react';

interface FlowerSceneProps {
  onFlowerClick: () => void;
}

export function FlowerScene({ onFlowerClick }: FlowerSceneProps) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Estrellas brillantes de fondo */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <motion.div
              className="text-yellow-400"
              style={{
                fontSize: `${Math.random() * 20 + 15}px`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              ✨
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-pink-800 mb-4">
          Mariana
        </h1>
        <p className="text-2xl md:text-3xl text-purple-700">
          Recoge la flor por favor 🌸
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="cursor-pointer relative z-10"
        onClick={onFlowerClick}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="filter drop-shadow-2xl"
        >
          {/* Petals */}
          <motion.ellipse
            cx="100"
            cy="60"
            rx="25"
            ry="35"
            fill="#FF1493"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          <motion.ellipse
            cx="140"
            cy="80"
            rx="25"
            ry="35"
            fill="#FF69B4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          <motion.ellipse
            cx="150"
            cy="120"
            rx="25"
            ry="35"
            fill="#FFB6C1"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          <motion.ellipse
            cx="140"
            cy="160"
            rx="25"
            ry="35"
            fill="#FF69B4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          <motion.ellipse
            cx="100"
            cy="170"
            rx="25"
            ry="35"
            fill="#FF1493"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          <motion.ellipse
            cx="60"
            cy="160"
            rx="25"
            ry="35"
            fill="#FFB6C1"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          <motion.ellipse
            cx="50"
            cy="120"
            rx="25"
            ry="35"
            fill="#FF69B4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          <motion.ellipse
            cx="60"
            cy="80"
            rx="25"
            ry="35"
            fill="#FF1493"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          {/* Center */}
          <circle cx="100" cy="115" r="30" fill="#FFD700" />
          {/* Stem */}
          <rect x="95" y="145" width="10" height="80" fill="#228B22" rx="5" />
        </svg>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-8 text-xl text-purple-600 relative z-10"
      >
        ✨ Haz click en la flor ✨
      </motion.p>
    </div>
  );
}