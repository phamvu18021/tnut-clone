import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";

export const MotionTop = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{
        position: "relative",
        bottom: 500,
        top: 100,
        // opacity: 0,
        visibility: "hidden",
      }}
      animate={{
        position: "relative",
        bottom: 0,
        top: 0,
        // opacity: 1,
        visibility: "visible",
      }}
      transition={{ duration: 1, delay: 2 }}
    >
      {children}
    </motion.div>
  );
};
