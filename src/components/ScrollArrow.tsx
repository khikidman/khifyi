import { motion, useScroll, useTransform } from "framer-motion";

const ScrollArrow = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [0, 150],
    [1, 0]
  );

  const y = useTransform(
    scrollY,
    [0, 150],
    [0, 30]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blue-400 animate-arrow -translate-y-30"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </motion.div>
  );
};

export default ScrollArrow;