import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function PhotoCapture() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const photos = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    // Cambiar foto cada 5 segundos (más lento)
    const photoTimer = setInterval(() => {
      setCurrentPhoto((prev) => {
        if (prev < photos.length - 1) {
          return prev + 1;
        } else {
          // Cuando terminan todas las fotos, mostrar mensaje
          setShowMessage(true);
          return prev;
        }
      });
    }, 5000); // Aumentado de 3000 a 5000ms

    return () => clearInterval(photoTimer);
  }, []);

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-900 to-pink-900 overflow-hidden z-50">
      {/* Estrellas de fondo */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Título principal */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-6 md:top-12 left-0 right-0 text-center z-30 px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300">
          Nuestros Momentos 💕
        </h1>
        <p className="text-lg md:text-xl text-pink-200 mt-2">
          Foto {currentPhoto + 1} de {photos.length}
        </p>
      </motion.div>

      {/* Carrusel de fotos */}
      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhoto}
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            transition={{ duration: 1, type: 'spring' }}
            className="relative max-w-2xl w-full"
          >
            {/* Marco de la foto */}
            <div className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-red-500 p-3 md:p-4 rounded-3xl shadow-2xl">
              <div className="bg-white p-2 md:p-3 rounded-2xl">
                <div className="relative overflow-hidden rounded-xl">
                  <motion.img
                    src={`/fotos/foto${photos[currentPhoto]}.jpg`}
                    alt={`Momento especial ${photos[currentPhoto]}`}
                    className="w-full h-[50vh] md:h-[60vh] object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23f472b6" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="white"%3EFoto ${photos[currentPhoto]}%3C/text%3E%3C/svg%3E`;
                    }}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />
                </div>
              </div>

              {/* Corazones en las esquinas */}
              <motion.div
                className="absolute -top-4 -left-4 text-4xl md:text-5xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                💖
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 text-4xl md:text-5xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 3,
                  delay: 0.5,
                  repeat: Infinity,
                }}
              >
                💗
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 text-4xl md:text-5xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  delay: 1,
                  repeat: Infinity,
                }}
              >
                💝
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 text-4xl md:text-5xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 3,
                  delay: 1.5,
                  repeat: Infinity,
                }}
              >
                💓
              </motion.div>
            </div>

            {/* Texto descriptivo debajo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center"
            >
              <p className="text-xl md:text-2xl text-white font-bold">
                Momento Especial {photos[currentPhoto]}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores de progreso */}
      <div className="absolute bottom-6 md:bottom-12 left-0 right-0 flex justify-center gap-2 px-4 z-30">
        {photos.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentPhoto
                ? 'bg-pink-400 w-12'
                : index < currentPhoto
                ? 'bg-pink-600 w-8'
                : 'bg-white/30 w-8'
            }`}
            animate={{
              scale: index === currentPhoto ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: index === currentPhoto ? Infinity : 0,
            }}
          />
        ))}
      </div>

      {/* Mensaje final cuando terminen todas las fotos */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-40 px-4"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="bg-gradient-to-br from-pink-500 via-purple-500 to-red-500 p-8 md:p-12 rounded-3xl shadow-2xl text-center max-w-2xl"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="text-6xl md:text-8xl mb-6"
              >
                💕
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Gracias por acompañarme
              </h2>
              
              <p className="text-xl md:text-3xl text-pink-100 mb-4">
                y hacer mis momentos increíbles.
              </p>

              <p className="text-2xl md:text-4xl text-yellow-300 font-bold mb-6">
                Espero que me acompañes en más.
              </p>

              <motion.div
                className="mt-8 flex justify-center gap-3"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <span className="text-5xl md:text-6xl">💖</span>
                <span className="text-5xl md:text-6xl">💗</span>
                <span className="text-5xl md:text-6xl">💝</span>
              </motion.div>

              {/* Texto final - solo corazón */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                className="mt-8 bg-pink-600 rounded-full p-6 inline-block"
              >
                <p className="text-3xl md:text-5xl font-bold text-white flex items-center gap-3">
                  <span>✨</span>
                  <span>Tú eres mi felicidad</span>
                  <span>✨</span>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corazones flotantes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="fixed text-pink-300 opacity-40 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 30 + 20}px`,
          }}
          animate={{
            y: ['100vh', '-10vh'],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}