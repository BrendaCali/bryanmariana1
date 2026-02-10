import { motion } from 'motion/react';

interface DancingFigureProps {
  gender: 'male' | 'female';
  isPlaying: boolean;
}

export function DancingFigure({ gender, isPlaying }: DancingFigureProps) {
  const isPrince = gender === 'male';
  
  // Colores estilo Funko Pop
  const colors = isPrince
    ? {
        skin: '#FFD4A3',
        outfit: '#4169E1',
        accent: '#FFD700',
        hair: '#8B4513',
      }
    : {
        skin: '#FFD4A3',
        dress: '#FF69B4',
        accent: '#FFD700',
        hair: '#4B2E1F',
      };

  // Animaciones de baile realistas
  const danceAnimation = isPlaying ? {
    // Movimiento de balanceo de lado a lado
    x: isPrince ? [-10, 10, -10] : [10, -10, 10],
    y: [0, -15, 0, -10, 0],
    // Giro suave elegante
    rotate: isPrince ? [0, -5, 5, 0] : [0, 5, -5, 0],
  } : {};

  const danceTransition = {
    x: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
    y: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
    rotate: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    }
  };

  return (
    <motion.div
      className="relative"
      animate={danceAnimation}
      transition={danceTransition}
    >
      {/* Cabeza GRANDE estilo Funko Pop */}
      <motion.div
        className="relative z-10 mx-auto rounded-3xl shadow-2xl"
        style={{ 
          width: '100px',
          height: '100px',
          backgroundColor: colors.skin,
        }}
        animate={isPlaying ? {
          rotate: isPrince ? [-3, 3, -3] : [3, -3, 3],
        } : {}}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Cabello */}
        <div 
          className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-t-full"
          style={{
            width: '90px',
            height: '40px',
            backgroundColor: colors.hair,
          }}
        />

        {/* Corona */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2"
          animate={isPlaying ? {
            rotate: [-5, 5, -5],
            scale: [1, 1.1, 1],
          } : {}}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        >
          {isPrince ? (
            // Corona de príncipe
            <div className="relative">
              <div 
                className="w-16 h-8 rounded-t-lg border-4 border-yellow-500"
                style={{ backgroundColor: colors.accent }}
              />
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-yellow-500" />
              <div className="absolute -top-1 left-2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-yellow-500" />
              <div className="absolute -top-1 right-2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-yellow-500" />
            </div>
          ) : (
            // Corona de princesa
            <div className="relative">
              <div 
                className="w-20 h-10 rounded-t-full border-4 border-pink-400"
                style={{ backgroundColor: colors.accent }}
              />
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute -top-2 w-2 h-2 rounded-full bg-pink-400"
                  style={{ left: `${i * 18}%` }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Ojos grandes estilo Funko */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-4">
          <div className="relative">
            <div className="w-8 h-8 bg-black rounded-full" />
            <div className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full" />
          </div>
          <div className="relative">
            <div className="w-8 h-8 bg-black rounded-full" />
            <div className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full" />
          </div>
        </div>

        {/* Boca sonriente */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-4 border-b-4 border-black rounded-b-full" />

        {/* Rubor en mejillas */}
        <div className="absolute bottom-8 left-2 w-6 h-3 bg-pink-300 rounded-full opacity-40" />
        <div className="absolute bottom-8 right-2 w-6 h-3 bg-pink-300 rounded-full opacity-40" />
      </motion.div>

      {/* Cuerpo más pequeño */}
      <motion.div
        className="relative mx-auto -mt-2 rounded-t-2xl"
        style={{
          width: '60px',
          height: '70px',
          backgroundColor: isPrince ? colors.outfit : colors.dress,
        }}
        animate={isPlaying ? {
          scaleY: [1, 0.95, 1, 0.98, 1],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        {/* Detalles del príncipe */}
        {isPrince && (
          <>
            {/* Botones dorados */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.accent }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.accent }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.accent }} />
            </div>
            {/* Capa */}
            <motion.div
              className="absolute top-0 -left-8 w-8 h-16 rounded-l-2xl bg-purple-800 opacity-80"
              animate={isPlaying ? {
                scaleX: [1, 1.3, 1, 1.2, 1],
                x: [0, -3, 0],
              } : {}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute top-0 -right-8 w-8 h-16 rounded-r-2xl bg-purple-800 opacity-80"
              animate={isPlaying ? {
                scaleX: [1, 1.3, 1, 1.2, 1],
                x: [0, 3, 0],
              } : {}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </>
        )}

        {/* Detalles de la princesa */}
        {!isPrince && (
          <>
            {/* Brillo en el vestido */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full opacity-40" />
            <div className="absolute top-8 left-2 w-3 h-3 bg-white rounded-full opacity-30" />
            <div className="absolute top-8 right-2 w-3 h-3 bg-white rounded-full opacity-30" />
          </>
        )}

        {/* Brazos - movimiento de baile romántico */}
        <motion.div
          className="absolute top-4 -left-8 w-8 h-4 rounded-full"
          style={{ backgroundColor: colors.skin }}
          animate={isPlaying ? {
            rotate: isPrince ? [10, 45, 10, -20, 10] : [-10, -45, -10, 20, -10],
            y: [0, -5, 0, 5, 0],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-4 -right-8 w-8 h-4 rounded-full"
          style={{ backgroundColor: colors.skin }}
          animate={isPlaying ? {
            rotate: isPrince ? [-10, -45, -10, 20, -10] : [10, 45, 10, -20, 10],
            y: [0, 5, 0, -5, 0],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Falda de princesa o piernas de príncipe */}
      {isPrince ? (
        <div className="flex gap-2 justify-center -mt-1">
          <motion.div
            className="w-5 h-16 rounded-b-lg"
            style={{ backgroundColor: colors.outfit }}
            animate={isPlaying ? {
              scaleY: [1, 1.05, 1, 1.03, 1],
              rotate: [-8, 8, -8],
              x: [0, -2, 0],
            } : {}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="w-5 h-16 rounded-b-lg"
            style={{ backgroundColor: colors.outfit }}
            animate={isPlaying ? {
              scaleY: [1, 1.05, 1, 1.03, 1],
              rotate: [8, -8, 8],
              x: [0, 2, 0],
            } : {}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </div>
      ) : (
        <motion.div
          className="mx-auto -mt-1"
          style={{
            width: '80px',
            height: '70px',
            backgroundColor: colors.dress,
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)',
          }}
          animate={isPlaying ? {
            scaleX: [1, 1.15, 1, 1.1, 1],
            rotate: [0, 3, -3, 0],
          } : {}}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      )}

      {/* Sombra */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/30 rounded-full blur-md"
        animate={isPlaying ? {
          scaleX: [1, 1.15, 1, 1.1, 1],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />

      {/* Estrellitas alrededor */}
      {isPlaying && (
        <>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-300 text-xl"
              style={{
                left: `${50 + Math.cos((i * Math.PI * 2) / 4 + Math.PI / 4) * 70}px`,
                top: `${50 + Math.sin((i * Math.PI * 2) / 4 + Math.PI / 4) * 70}px`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180],
              }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity,
              }}
            >
              ✨
            </motion.div>
          ))}
        </>
      )}
    </motion.div>
  );
}
