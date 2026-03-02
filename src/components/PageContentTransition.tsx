import { motion } from "framer-motion";

export default function PageContentTransition({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5, // ⭐ Slower = nicer premium feel
        ease: [0.25, 0.8, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}