import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BeerBottle = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  // Rotate and move the bottle based on scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 100, -50, 150, -100, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      <motion.div
        style={{
          rotate,
          y,
          scale,
        }}
        className="w-32 md:w-48"
      >
        <img
          src="/attached_assets/stock_images/professional_cold_be_e1e49cb9.jpg"
          alt="Beer Bottle"
          className="w-full h-auto drop-shadow-2xl mix-blend-multiply"
        />
      </motion.div>
    </div>
  );
};

export default BeerBottle;
