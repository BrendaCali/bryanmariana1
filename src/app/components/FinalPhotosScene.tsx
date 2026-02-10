import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function FinalPhotosScene() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Mostrar contenido con animación después de montar
    setTimeout(() => setShowContent(true), 300);
  }, []);

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-900 to-pink-900 overflow-y-auto z-50">
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

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative container mx-auto px-4 py-12 max-w-6xl"
          >
            {/* Mensaje principal */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-12 shadow-2xl border border-white/20"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-center space-y-4"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300">
                  <span className="inline-block animate-pulse">💕</span>
                  {' '}Feliz Día de Amor{' '}
                  <span className="inline-block animate-pulse">💕</span>
                </h1>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl md:text-3xl text-pink-200 leading-relaxed max-w-4xl mx-auto"
                >
                  <p className="mb-4">
                    Gracias por ser mi compañera y hacer mis momentos lindos.
                  </p>
                  <p className="mb-4">
                    Espero sigas siendo parte de mi vida y sigamos creando
                  </p>
                  <p className="mb-4">
                    hermosos recuerdos juntos.
                  </p>
                  <p className="text-2xl md:text-4xl font-bold text-yellow-300 mt-6">
                    ¡Gracias por todo, amor mío!
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Galería de 6 fotos */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[1, 2, 3, 4, 5, 6].map((num, index) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    delay: 1 + index * 0.2,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 2,
                    zIndex: 10,
                  }}
                  className="relative group"
                >
                  {/* Corazones en las esquinas */}
                  <motion.div
                    className="absolute -top-3 -left-3 text-3xl z-20"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.3,
                      repeat: Infinity,
                    }}
                  >
                    💖
                  </motion.div>
                  <motion.div
                    className="absolute -top-3 -right-3 text-3xl z-20"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.3 + 0.5,
                      repeat: Infinity,
                    }}
                  >
                    💗
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-3 -left-3 text-3xl z-20"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.3 + 1,
                      repeat: Infinity,
                    }}
                  >
                    💝
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-3 -right-3 text-3xl z-20"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.3 + 1.5,
                      repeat: Infinity,
                    }}
                  >
                    💓
                  </motion.div>

                  {/* Marco con gradiente */}
                  <div className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-red-500 p-2 rounded-2xl shadow-2xl">
                    <div className="bg-white p-2 rounded-xl">
                      {/* Contenedor de la foto con forma especial */}
                      <div 
                        className="relative overflow-hidden rounded-lg"
                        style={{
                          clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
                        }}
                      >
                        <motion.img
                          src={`/fotos/foto${num}.jpg`}
                          alt={`Recuerdo ${num}`}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            // Imagen de respaldo si no existe la foto
                            const target = e.target as HTMLImageElement;
                            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f472b6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="white"%3EFoto ' + num + '%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Texto decorativo debajo */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 + index * 0.2 }}
                    className="mt-4 text-center text-white font-bold text-lg"
                  >
                    Momento Especial {num}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mensaje final decorativo */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, type: 'spring' }}
              className="mt-16 text-center"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="text-6xl md:text-8xl mb-6"
              >
                💕
              </motion.div>
              <p className="text-2xl md:text-4xl text-yellow-300 italic font-bold">
                "Estos momentos son para siempre"
              </p>
              <motion.div
                className="mt-6 text-5xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                💖 💗 💝 💓 💕
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Partículas flotantes - Corazones */}
      {[...Array(20)].map((_, i) => (
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
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Partículas flotantes - Flores */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`flower-${i}`}
          className="fixed text-pink-200 opacity-40 pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 40 + 25}px`,
          }}
          animate={{
            x: ['-10vw', '110vw'],
            y: [0, Math.random() * 100 - 50],
            rotate: [0, 720],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}