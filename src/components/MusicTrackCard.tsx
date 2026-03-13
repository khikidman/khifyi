import { FaSpotify, FaApple, FaAmazon } from "react-icons/fa";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  description?: string;
  cover: string;

  spotify?: string;
  apple?: string;
  amazon?: string;

  releaseDate?: string;
}

const MusicTrackCard = ({
  title,
  description,
  cover,
  spotify,
  apple,
  amazon,
  releaseDate
}: Props) => {
  const [timeLeft, setTimeLeft] = useState<string | null>(null);

  // Countdown logic
  useEffect(() => {
    if (!releaseDate) return;

    const releaseTime = new Date(releaseDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = releaseTime - now;

      if (diff <= 0) {
        setTimeLeft(null); // release is live
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [releaseDate]);

  const isReleased = releaseDate ? new Date().getTime() >= new Date(releaseDate).getTime() : true;

  return (
    <div
      className="
        break-inside-avoid
        mb-8
        group
        relative
        cursor-pointer
        rounded-2xl
        bg-gradient-to-b from-zinc-900/80 to-zinc-950
        border-2 border-zinc-800
        p-6
        transition-all duration-500 ease-out
        hover:-translate-y-1
        hover:border-blue-300/80
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        backdrop-blur-xl
        overflow-hidden
        flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6
      "
    >
      {/* Light Reflection */}
      <div className="
        absolute inset-0
        pointer-events-none
        bg-gradient-to-tr
        from-transparent
        via-blue-400/5
        to-transparent
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-700
      " />

      {/* Cover */}
      <div className="w-full md:w-32 flex-shrink-0 rounded-lg overflow-hidden">
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover aspect-square"
        />
      </div>

      {/* Info + Timer + Icons */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white truncate">{title}</h3>
          {description && (
            <p className="text-sm text-zinc-400 mt-1">{description}</p>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
          {/* Countdown Timer */}
          {!isReleased && (
            <div className="
              inline-block
              px-3 py-1
              rounded-full
              bg-blue-400/10
              text-blue-300 text-xs font-medium
              shadow-[0_0_10px_rgba(59,130,246,0.3)]
              backdrop-blur-sm
            ">
              Releases in {timeLeft}
            </div>
          )}

          {/* Platform Icons */}
          {isReleased && (
            <div className="flex items-center gap-4 text-xl">
              {spotify && <a href={spotify} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-green-400 transition-colors"><FaSpotify /></a>}
              {apple && <a href={apple} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><FaApple /></a>}
              {amazon && <a href={amazon} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors"><FaAmazon /></a>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicTrackCard;