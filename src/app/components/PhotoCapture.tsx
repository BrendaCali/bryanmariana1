import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

export function PhotoCapture() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showLoveLetter, setShowLoveLetter] = useState(false);

  // Posiciones de las fotos alrededor del corazón central
  const photoPositions = [
    { top: '10%', left: '15%', rotate: -8 },
    { top: '12%', right: '18%', rotate: 5 },
    { bottom: '25%', left: '12%', rotate: 6 },
    { bottom: '22%', right: '15%', rotate: -7 },
  ];

  const handleButtonClick = () => {
    // MOSTRAR CONFETI
    setShowConfetti(true);
    
    // El confeti dura 3 segundos
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    // Mostrar carta de amor después del confeti
    setTimeout(() => {
      setShowLoveLetter(true);
    }, 3500);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-50">
      {/* CONFETI DE CORAZONES */}
      <AnimatePresence>
        {showConfetti && (
          <>
            {/* Confeti que cae desde arriba */}
            {[...Array(50)].map((_, i) => {
              const hearts = ['💖', '💗', '💝', '💓', '💕', '❤️', '💞', '💘'];
              const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
              
              return (
                <motion.div
                  key={`confetti-fall-${i}`}
                  className="absolute text-4xl pointer-events-none z-[100]"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: '-10%',
                  }}
                  initial={{ y: 0, opacity: 1, rotate: 0 }}
                  animate={{
                    y: '110vh',
                    opacity: [1, 1, 0],
                    rotate: Math.random() * 720 - 360,
                    x: [0, Math.random() * 100 - 50],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: Math.random() * 2 + 2,
                    delay: Math.random() * 0.5,
                    ease: 'easeIn',
                  }}
                >
                  {randomHeart}
                </motion.div>
              );
            })}

            {/* Confeti que explota desde el centro */}
            {[...Array(40)].map((_, i) => {
              const hearts = ['💖', '💗', '💝', '💓', '💕', '❤️', '💞', '💘'];
              const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
              const angle = (i * 360) / 40;
              const distance = 200 + Math.random() * 300;
              
              return (
                <motion.div
                  key={`confetti-explode-${i}`}
                  className="absolute text-3xl pointer-events-none z-[100]"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 1, 
                    scale: 0,
                    rotate: 0,
                  }}
                  animate={{
                    x: Math.cos(angle * Math.PI / 180) * distance,
                    y: Math.sin(angle * Math.PI / 180) * distance,
                    opacity: [1, 1, 0],
                    scale: [0, 1.5, 1],
                    rotate: Math.random() * 720,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 2,
                    ease: 'easeOut',
                  }}
                >
                  {randomHeart}
                </motion.div>
              );
            })}

            {/* Estrellas brillantes que explotan */}
            {[...Array(30)].map((_, i) => {
              const angle = (i * 360) / 30;
              const distance = 150 + Math.random() * 250;
              
              return (
                <motion.div
                  key={`star-explode-${i}`}
                  className="absolute text-4xl pointer-events-none z-[100]"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 1, 
                    scale: 0,
                  }}
                  animate={{
                    x: Math.cos(angle * Math.PI / 180) * distance,
                    y: Math.sin(angle * Math.PI / 180) * distance,
                    opacity: [1, 1, 0],
                    scale: [0, 2, 0],
                    rotate: [0, 360],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    ease: 'easeOut',
                    delay: Math.random() * 0.3,
                  }}
                >
                  ✨
                </motion.div>
              );
            })}
          </>
        )}
      </AnimatePresence>

      {/* Pantalla de carta de amor */}
      <AnimatePresence>
        {showLoveLetter && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 flex flex-col items-center justify-center z-[60] px-4 overflow-y-auto"
          >
            {/* Corazones flotantes de fondo */}
            <div className="absolute inset-0">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={`bg-heart-${i}`}
                  className="absolute text-pink-300 opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 40 + 30}px`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 360],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                >
                  💕
                </motion.div>
              ))}
            </div>

            {/* Estrellas brillantes */}
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={`star-${i}`}
                  className="absolute text-yellow-200"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 20 + 15}px`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </div>

            {/* Contenedor de la carta */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative z-10 max-w-3xl w-full my-8"
            >
              {/* Corazón principal arriba */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-center mb-8"
              >
                <div className="text-8xl md:text-9xl">💖</div>
              </motion.div>

              {/* Carta con efecto de papel */}
              <div className="bg-gradient-to-br from-white/95 to-pink-50/95 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-pink-200/50 relative">
                {/* Decoración de esquinas */}
                <div className="absolute top-4 left-4 text-4xl">🌸</div>
                <div className="absolute top-4 right-4 text-4xl">🌸</div>
                <div className="absolute bottom-4 left-4 text-4xl">💝</div>
                <div className="absolute bottom-4 right-4 text-4xl">💝</div>

                {/* Contenido de la carta */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="space-y-6 text-gray-800"
                >
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-lg md:text-xl leading-relaxed"
                  >
                    Leí tu carta y me llegó al corazón.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-lg md:text-xl leading-relaxed"
                  >
                    Me gusta mucho lo que estamos construyendo… cómo llegaste a mi vida tan natural y cómo contigo me siento en paz y a la vez emocionado.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 }}
                    className="text-lg md:text-xl leading-relaxed"
                  >
                    También me siento vulnerable, porque esto me importa de verdad, pero lejos de asustarme, me dan más ganas de quedarme y conocerte cada día más.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.1 }}
                    className="text-lg md:text-xl leading-relaxed"
                  >
                    Me encanta tu forma de ser conmigo y todo lo bonito que me haces sentir.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5, type: "spring" }}
                    className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 pt-4"
                  >
                    <p className="mb-4">
                      Quiero que lo sepas sin rodeos: te quiero…
                    </p>
                    <p className="text-2xl md:text-3xl">
                      y sí, me estoy enamorando de ti, de una forma sincera y profunda. 🤍
                    </p>
                  </motion.div>
                </motion.div>

                {/* Firma decorativa */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  className="mt-8 text-right"
                >
                  <p className="text-2xl md:text-3xl font-dancing text-pink-700">
                    Con todo mi amor 💕
                  </p>
                </motion.div>
              </div>

              {/* Corazones decorativos flotantes alrededor de la carta */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`float-heart-${i}`}
                  className="absolute text-5xl"
                  style={{
                    left: i % 2 === 0 ? '-10%' : '110%',
                    top: `${(i * 100) / 8}%`,
                  }}
                  animate={{
                    x: i % 2 === 0 ? [-20, 20, -20] : [20, -20, 20],
                    y: [-20, 20, -20],
                    rotate: [0, 360],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  {i % 4 === 0 ? '💖' : i % 4 === 1 ? '💗' : i % 4 === 2 ? '💝' : '💕'}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Escena principal de fotos - SIEMPRE VISIBLE */}
      {!showLoveLetter && (
        <div className="relative w-full h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        {/* Skyline decorativo */}
        <div className="absolute bottom-0 left-0 right-0 h-64">
          <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-purple-950/80 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around h-full opacity-60">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="bg-purple-950"
                  style={{
                    width: `${Math.random() * 60 + 30}px`,
                    height: `${Math.random() * 120 + 60}px`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-indigo-950/50" />
        </div>

        {/* Estrellas */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 70}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Globos de corazón flotantes */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`balloon-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 40}%`,
              }}
              animate={{
                y: [-20, -60, -20],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <div className="text-5xl opacity-40 filter drop-shadow-lg">
                💕
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corazón central grande */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-64 h-64 text-pink-400 fill-pink-400 drop-shadow-2xl" />
          </motion.div>
        </motion.div>

        {/* Fotos flotantes alrededor del corazón */}
        {photoPositions.map((pos, index) => (
          <motion.div
            key={`photo-${index}`}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: pos.rotate }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 0.5 + index * 0.2,
            }}
            style={{
              position: 'absolute',
              ...pos,
            }}
            className="z-10"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
              }}
              className="relative"
            >
              {/* Marco de foto estilo Polaroid */}
              <div className="bg-white p-4 pb-12 shadow-2xl rounded-lg">
                <div className="w-48 h-48 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded overflow-hidden">
                  <img 
                    src={`/fotos/foto${index + 1}.jpeg`} 
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Mensaje central */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-30 max-w-2xl px-4"
        >
          <div className="bg-gradient-to-br from-pink-500/80 via-purple-500/80 to-red-500/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-white/30">
            <p className="text-white text-2xl md:text-3xl font-bold mb-4">
              Gracias por acompañarme y hacer mis momentos increíbles.
            </p>
            <p className="text-yellow-200 text-2xl md:text-3xl font-bold mb-4">
              Espero que me acompañes en más.
            </p>
            <p className="text-white text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
              💕 Te amo 💕
            </p>
          </div>
        </motion.div>

        {/* Marca de agua */}
        <div className="absolute bottom-4 right-4 text-white/40 text-sm z-40">
          2026
        </div>
        </div>
      )}

      {/* Botón flotante */}
      {!showLoveLetter && (
        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleButtonClick}
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 text-white font-bold text-2xl md:text-3xl rounded-full shadow-2xl hover:shadow-pink-300/50 transition-all"
        >
          💖 Tú eres mi felicidad 💖
        </motion.button>
      </motion.div>
      )}
    </div>
  );
}