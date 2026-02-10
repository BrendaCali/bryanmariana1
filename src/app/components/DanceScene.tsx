import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DancingFigure } from '@/app/components/DancingFigure';
import { FloatingHearts } from '@/app/components/FloatingHearts';
import { FallingPetals } from '@/app/components/FallingPetals';
import { PhotoCapture } from '@/app/components/PhotoCapture';

export function DanceScene() {
  const [step, setStep] = useState(0);
  const [waitingResponse, setWaitingResponse] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicEnded, setMusicEnded] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [musicError, setMusicError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleAcceptDance = () => {
    setWaitingResponse(false);
    setIsPlaying(true);
    setStep(1);
    
    if (audioRef.current) {
      // Intentar reproducir música, pero continuar si falla
      audioRef.current.play().catch((error) => {
        console.warn('Música no disponible:', error);
        setMusicError(true);
        // Continuar de todos modos - simular fin de música después de 30 segundos
        setTimeout(() => {
          handleMusicEnd();
        }, 30000); // 30 segundos de baile sin música
      });
    } else {
      // Si no hay audio, simular música
      setMusicError(true);
      setTimeout(() => {
        handleMusicEnd();
      }, 30000);
    }
  };

  const handleDeclineDance = () => {
    alert('😢 Tal vez en otro momento... pero sé que dirás que sí 💕');
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timers = [
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => setStep(3), 6000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [isPlaying]);

  const handleMusicEnd = () => {
    setMusicEnded(true);
    setStep(4);
    setTimeout(() => {
      setShowPhoto(true);
    }, 8000); // Aumentado de 3 a 8 segundos para leer mejor el mensaje
  };

  const handleAudioError = () => {
    setMusicError(true);
    // Si hay error, también continuar después de 30 segundos
    setTimeout(() => {
      handleMusicEnd();
    }, 30000);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Estrellas de fondo - MÁS BRILLANTES Y ABUNDANTES */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Brillos adicionales flotantes */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 25 + 15}px`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      {/* Destellos de luz */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF69B4' : '#DDA0DD'
              }40, transparent)`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Reproductor de audio */}
      <audio
        ref={audioRef}
        src="/music/song.mp3"
        onEnded={handleMusicEnd}
        onError={handleAudioError}
        preload="auto"
        style={{ display: 'none' }}
      />

      {/* Error de música */}
      {musicError && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-xl z-50 text-center max-w-md">
          <p className="font-bold mb-2">🎵 Modo sin música</p>
          <p className="text-sm">
            Bailarán por 30 segundos. Para agregar música: crea <code className="bg-yellow-700 px-2 py-1 rounded">public/music/song.mp3</code>
          </p>
        </div>
      )}

      {/* Pregunta de aceptación del baile */}
      <AnimatePresence>
        {waitingResponse && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-40 bg-black/40 backdrop-blur-sm px-4"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl md:text-6xl font-bold text-center text-white mb-8"
            >
              Mariana... 💕
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-4xl text-pink-300 text-center mb-12 max-w-2xl"
            >
              ¿Me acompañas en este baile?
            </motion.div>

            <div className="flex gap-6 flex-wrap justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAcceptDance}
                className="px-12 py-6 bg-gradient-to-r from-pink-500 to-red-500 text-white text-2xl md:text-3xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all"
              >
                ¡Sí quiero! 💖
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDeclineDance}
                className="px-8 py-6 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-lg md:text-xl font-bold rounded-full shadow-2xl hover:shadow-gray-500/50 transition-all"
              >
                No hay un no como respuesta
              </motion.button>
            </div>

            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-8 text-lg md:text-xl text-pink-200 italic"
            >
              Una canción especial nos espera...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Escena de baile */}
      {!waitingResponse && (
        <>
          <FloatingHearts />
          <FallingPetals />

          {/* Nombres flotantes */}
          <AnimatePresence>
            {step >= 1 && !musicEnded && (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-12 md:top-20 text-center z-20"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-red-300 to-pink-300"
                >
                  Bryan ❤️ Mariana
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Figuritas bailando */}
          {!musicEnded && (
            <div className="flex items-end justify-center gap-12 md:gap-24 relative z-10">
              <DancingFigure gender="male" isPlaying={isPlaying && !musicError} />
              <DancingFigure gender="female" isPlaying={isPlaying && !musicError} />
            </div>
          )}

          {/* Mensajes durante el baile */}
          {!musicEnded && (
            <div className="absolute inset-x-0 bottom-20 md:bottom-32 text-center px-4 z-20">
              {/* Corazones con frases MÁS A LOS LADOS Y MÁS LENTOS */}
              {(step >= 2) && (
                <>
                  {(() => {
                    const phrases = [
                      "Eres mi felicidad",
                      "Gracias por existir",
                      "Contigo todo es mejor",
                      "Eres mi luz",
                      "Te adoro",
                      "Mi alma gemela",
                      "Eres mi todo",
                      "Mi amor eterno",
                      "Juntos por siempre",
                      "Eres única",
                      "Mi persona favorita",
                      "Contigo soy feliz",
                      "Eres mi inspiración",
                      "Mi razón de sonreír",
                      "Te necesito",
                      "Eres especial",
                      "Mi tesoro",
                      "Contigo es perfecto",
                      "Eres mi sueño",
                      "Mi gran amor"
                    ];

                    return [...Array(20)].map((_, i) => (
                      <motion.div
                        key={`side-heart-${i}`}
                        className="absolute flex items-center justify-center"
                        style={{
                          // MÁS A LOS LADOS - más espacio desde los bordes
                          left: i % 2 === 0 ? '5%' : 'auto',
                          right: i % 2 === 1 ? '5%' : 'auto',
                          bottom: '0',
                          width: '140px',
                        }}
                        initial={{ y: 0, opacity: 0 }}
                        animate={{
                          y: -700,
                          opacity: [0, 1, 1, 1, 0],
                          scale: [0.5, 1, 1, 1, 0.8],
                          // Movimiento lateral más sutil
                          x: i % 2 === 0 ? [0, 10, -5, 3, 0] : [0, -10, 5, -3, 0],
                        }}
                        transition={{
                          // MUCHO MÁS LENTO - 12 segundos para subir
                          duration: 12,
                          // Sale ALTERNADO - cada 6 segundos sale uno (izquierda, luego derecha)
                          delay: i * 6,
                          repeat: Infinity,
                          // Mucho más tiempo entre repeticiones
                          repeatDelay: 30,
                          ease: 'easeOut',
                        }}
                      >
                        {/* Corazón de fondo */}
                        <div className="relative flex items-center justify-center">
                          <motion.div
                            className="absolute text-7xl"
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                            }}
                          >
                            {i % 4 === 0 ? '💖' : i % 4 === 1 ? '💗' : i % 4 === 2 ? '💝' : '💕'}
                          </motion.div>
                          
                          {/* Texto dentro del corazón */}
                          <div className="relative z-10 text-white font-bold text-xs leading-tight text-center px-2 py-1 max-w-[100px]"
                               style={{
                                 textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.6)',
                               }}>
                            {phrases[i]}
                          </div>
                        </div>
                      </motion.div>
                    ));
                  })()}
                </>
              )}

              <AnimatePresence mode="wait">
                {step >= 2 && step < 3 && (
                  <motion.div
                    key="message1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-4xl font-bold text-white mb-4 relative"
                  >
                    💃 ¡Gracias por aceptar! 🕺
                  </motion.div>
                )}

                {step >= 3 && step < 4 && (
                  <motion.div
                    key="message2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-3xl font-bold text-pink-200 relative"
                  >
                    ✨ En este baile llamado vida,
                    <br />
                    solo quiero bailar contigo ✨
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Botón para saltar la canción */}
          {!musicEnded && (
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleMusicEnd}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full shadow-lg border border-white/30 hover:bg-white/30 transition-all"
            >
              ⏭️ Saltar canción
            </motion.button>
          )}

          {/* Mensaje final cuando termina la música */}
          <AnimatePresence>
            {musicEnded && !showPhoto && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center z-30 space-y-8 px-4"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-yellow-300 to-pink-300"
                >
                  💖 Gracias por ser mi pieza 💖
                  <br />
                  <span className="text-4xl md:text-6xl">Mi princesa</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-3xl text-pink-200"
                >
                  "Que nunca se acabe esta canción" 🎵
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Captura de foto */}
          {showPhoto && (
            <PhotoCapture />
          )}
        </>
      )}
    </div>
  );
}