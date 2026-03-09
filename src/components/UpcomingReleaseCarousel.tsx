import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface Release {
  title: string;
  releaseDate: string; // ISO string or formatted date
}

interface Props {
  releases: Release[];
  interval?: number; // ms between slides
}

const UpcomingReleasesCarousel = ({ releases, interval = 4000 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % releases.length);
    }, interval);
    return () => clearInterval(timer);
  }, [releases.length, interval]);

  if (!releases.length) return null;

  return (
    <Link to={"/music"} className="absolute top-16 w-full mt-4 px-6 py-0 mb-0 flex justify-center overflow-hidden z-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xs md:text-base text-blue-300"
        >
          🎵 Upcoming Release:{" "}
          <span className="text- font-semibold text-white">
            {releases[currentIndex].title}
          </span>{" "}
          – {releases[currentIndex].releaseDate}
        </motion.div>
      </AnimatePresence>
    </Link>
  );
};

export default UpcomingReleasesCarousel;