import { useRef, useState, useEffect } from "react";

interface Props {
  title: string;
  description?: string;
  cover: string;
  trackId: string;
}

const MusicTrackCard = ({
  title,
  description,
  cover,
  trackId
}: Props) => {

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulated progress (since SoundCloud doesn't easily expose progress via iframe API)
  useEffect(() => {
    if (!isPlaying) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 0.5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.contentWindow?.postMessage(
      JSON.stringify({
        method: isPlaying ? "pause" : "play"
      }),
      "*"
    );

    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="
        relative
        flex
        items-center
        gap-6
        rounded-xl
        bg-zinc-900/40
        border border-zinc-800
        hover:border-blue-500
        transition-all duration-300
        p-5
        group
        overflow-hidden
      "
    >
      {/* Hidden SoundCloud Player */}
      <iframe
        ref={iframeRef}
        className="hidden"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&auto_play=false&visual=true`}
      />

      {/* Cover */}
      <div className="w-28 md:w-32 flex-shrink-0 rounded-lg overflow-hidden">
        <img
          src={cover}
          className="w-full h-full object-cover aspect-square"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-semibold truncate">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-zinc-500 mt-1 truncate">
            {description}
          </p>
        )}
      </div>

      {/* Play Button */}
      <button
        onClick={togglePlay}
        className={`
          w-14 h-14
          rounded-full
          flex items-center justify-center
          text-xl font-bold
          transition-all duration-300
          shrink-0

          ${isPlaying
            ? "bg-blue-300 text-black shadow-[0_0_25px_rgba(147,197,253,0.6)]"
            : "bg-blue-300/20 text-blue-300 hover:bg-blue-300/40"}
        `}
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-zinc-800">
        <div
          className="h-full bg-blue-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default MusicTrackCard;