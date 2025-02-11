"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="overflow-hidden bg-black flex md:block">
      {/* Orange Circle */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 150, 0], y: [0, -150, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Yellow Circle */}
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Yellow Circle */}
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
