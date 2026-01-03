import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export const Magnetic = ({ children, strength = 0.5 }: { children: React.ReactNode, strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
};

export const MouseGlow = () => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsHoveringImage(target.tagName === 'IMG' || target.tagName === 'VIDEO' || !!target.closest('.aspect-video, .aspect-square, .aspect-\\[16\\/10\\]'));
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[60]"
      animate={{
        background: isHoveringImage 
          ? `radial-gradient(400px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(201,169,98,0.25), transparent 80%)`
          : `radial-gradient(1000px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(201,169,98,0.1), transparent 80%)`,
      }}
      transition={{ duration: 0.3 }}
    />
  );
};

export const CondensationFilter = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[55] opacity-30 mix-blend-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/glass-window.png')] opacity-20" />
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(255,255,255,0.1)]" />
    </div>
  );
};

export const GoldenDust = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random(),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, "-100vh"],
            x: [null, (Math.random() - 0.5) * 200 + "px"],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20,
          }}
        />
      ))}
    </div>
  );
};
