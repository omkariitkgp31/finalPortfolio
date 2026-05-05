"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: Center
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  // Section 2: Left
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3: Right
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center px-8 md:px-24">
      
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center text-center"
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Omkar.
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide">
            Creative Developer.
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start text-left max-w-2xl px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-lg">
          I build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            digital experiences.
          </span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end text-right px-8 md:px-24"
      >
        <div className="max-w-2xl ml-auto">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-lg">
            Bridging <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              design and engineering.
            </span>
          </h2>
        </div>
      </motion.div>

    </div>
  );
}
