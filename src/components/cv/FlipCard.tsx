import { useState } from "react";
import { motion } from "motion/react";

export function FlipCard({
  front,
  back,
  alt,
  backRotation = 0,
}: {
  front: string;
  back: string;
  alt: string;
  backRotation?: -90 | 0 | 90 | 180;
}) {
  const [flipped, setFlipped] = useState(false);
  const isQuarterTurn = Math.abs(backRotation) === 90;
  return (
    <motion.button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="relative w-full aspect-[3/4] group cursor-pointer select-none focus:outline-none"
      style={{ perspective: "1800px" }}
      aria-label={`Flip ${alt} card`}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 overflow-hidden shadow-2xl shadow-black/40"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <img
            src={front}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-bone/10 pointer-events-none" />
          <div className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.25em] text-bone bg-background/70 backdrop-blur px-3 py-1.5 border border-bone/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Tap to flip ↺
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 overflow-hidden shadow-2xl shadow-black/40"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {backRotation ? (
            <img
              src={back}
              alt=""
              className="absolute top-1/2 left-1/2 object-cover"
              style={{
                width: isQuarterTurn ? "133.3333%" : "100%",
                height: isQuarterTurn ? "75%" : "100%",
                transform: `translate(-50%, -50%) rotate(${backRotation}deg)`,
                transformOrigin: "center center",
              }}
            />
          ) : (
            <img src={back} alt="" className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 ring-1 ring-inset ring-bone/10 pointer-events-none" />
          <div className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.25em] text-bone bg-background/70 backdrop-blur px-3 py-1.5 border border-bone/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Flip back ↺
          </div>
        </div>
      </motion.div>
    </motion.button>
  );
}
