import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ShutterTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
      style={{ transformOrigin: "top" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export const PageFlipTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="perspective-1000 w-full h-full">
      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: -90, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="preserve-3d w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const GlitchReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};
