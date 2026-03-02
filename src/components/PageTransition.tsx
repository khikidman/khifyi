import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function PageTransition({
  children
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  if (!isHomePage) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.25, 0.8, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}