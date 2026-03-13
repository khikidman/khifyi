import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface Release {
  title: string;
  releaseDate: string; // ISO string
}

interface Props {
  releases: Release[];
  interval?: number;
}

const UpcomingReleasesCarousel = ({ releases, interval = 4000 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!releases.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % releases.length);
    }, interval);

    return () => clearInterval(timer);
  }, [releases.length, interval]);

  if (!releases.length) return null;

  const release = releases[currentIndex];
  const now = new Date();
  const releaseDate = new Date(release.releaseDate);

  const label = releaseDate > now ? "Upcoming Release" : "Recent Release";

  return (
    <Link
      to="/music"
      className="absolute top-16 w-full mt-4 px-6 flex justify-center overflow-hidden z-50"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xs md:text-base text-blue-300"
        >
          🎵 {label}:{" "}
          <span className="font-semibold text-white">
            {release.title}
          </span>{" "}
          – {release.releaseDate}
        </motion.div>
      </AnimatePresence>
    </Link>
  );
};

export default UpcomingReleasesCarousel;